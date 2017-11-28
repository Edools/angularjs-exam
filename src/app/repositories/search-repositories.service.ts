import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchRepositoriesService {

  private searchRepositoriesEndPoint = "https://api.github.com/search/repositories?q=";
  //private getRepositoryDetailsEndPoint = "https://api.github.com/users/";
  
  constructor(private http: Http) { }

  getRepositories(repository: string) {
    let url = `${this.searchRepositoriesEndPoint}${repository}`;
 
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

import { UserModel } from './../form-search/form-search.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UtilitiesService {

  private _urlUsers = 'https://api.github.com/users/';
  private _urlApi = 'https://api.github.com';


  constructor(private _http: HttpClient) { }

// https://api.github.com/users/{{UserName}}
  getUrlUsername(username: string): Observable<any> {
    return this._http.get(this._urlUsers + username);
  }

// https://api.github.com/users/{{UserName}}/repos 
  getListRepository(_user): Observable<any> {
    const endPoint: string = this._urlUsers + _user + '/repos';
    return this._http.get(endPoint);
  }


// https://api.github.com/repos/{{UserName}}/{{RepoName}}/issues
  getIssuesList(_user, _repoUrl): Observable<any> {
    const end: string = this._urlApi + '/repos/' + _user + '/' + _repoUrl + '/issues';
    const endPoint: string = this._urlUsers + _user + '/events';
    return this._http.get(end);
  }
}

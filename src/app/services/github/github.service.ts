import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class GithubService {

  private apiUrl: string = environment.github.apiUrl;
  private apiLogin: string = environment.github.loginUrl;

  constructor(
    private http: HttpClient
  ) { }

  repositories(since?: number) {
    let paramsRequest: object = since ? { params: { since: since } } : {};

    return new Promise(resolve => {
      this.http.get<Object[]>(`${this.apiUrl}/repositories`, paramsRequest)
        .subscribe(data => resolve(data));
    });
  }

  issues(owner: string, repository: string, params?: object) {
    let paramsRequest: object = params ? { params: { ...params } } : {};

    return new Promise(resolve => {
      this.http.get<Object[]>(`${this.apiUrl}/repos/${owner}/${repository}/issues`, paramsRequest)
        .subscribe(data => resolve(data));
    });
  }

  comments(owner: string, repository: string, issue: string) {
    return new Promise(resolve => {
      this.http.get<Object[]>(`${this.apiUrl}/repos/${owner}/${repository}/issues/${issue}/comments`)
        .subscribe(data => resolve(data));
    });
  }
  
  comment(owner: string, repository: string, issue: string, comment: string) {
    return this.http.post(`${this.apiUrl}/repos/${owner}/${repository}/issues/${issue}/comments`, {
      body: comment
    }, {
      headers: new HttpHeaders({ 'Authorization' : `token ` })
    });
  }
}

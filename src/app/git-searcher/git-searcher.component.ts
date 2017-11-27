import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'git-searcher',
  templateUrl: './git-searcher.component.html',
  styleUrls: ['./git-searcher.component.css']
})

export class GitSearcherComponent {
  constructor (private http: Http){}
  list = "";
  repos = [];
  searchUser(){
    this.http.get('https://api.github.com/users/'+this.list+'/repos')
    .subscribe(
      (res:Response)=> {
        const repositories = res.json();
        console.log(repositories);
        this.repos = repositories;
      }
    )
  }
  squaredButton = "w3-button w3-round w3-cyan w3-hover-teal";
  roundButton = "w3-button w3-circle w3-cyan w3-hover-teal";
  repoList = "w3-leftbar w3-border-cyan w3-hover-border-teal w3-hover-light-grey";
}

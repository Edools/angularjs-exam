import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../services/github/github.service';
import { IssueModel } from '../models/issue.model';

@Component({
  selector: 'app-repositoy',
  templateUrl: './repositoy.component.html'
})
export class RepositoyComponent implements OnInit {

  loading: boolean = true;

  issues: Object[] = [];

  owner: string;
  repository: string;

  constructor(
    private github: GithubService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repository = params['id'];
    });
  }

  ngOnInit() {
    this.github.issues(this.owner, this.repository)
      .then((issues: any) => {
        issues = issues.map((issue: IssueModel, i) => {
          return issue[i] = {
            title: issue.title,
            number: issue.number,
            comments: issue.comments,            
            user: issue.user.login
          };
        });

        this.issues = issues;

        this.loading = false;
      });
  }

}

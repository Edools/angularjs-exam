import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { GithubService } from '../services/github/github.service';
import { CommentModel } from '../models/comment.mode';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  loading: boolean = true;

  comments: Object[] = [];

  owner: string;
  repository: string;
  issue: string;

  comment: string = '';

  constructor(
    private github: GithubService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repository = params['id'];
      this.issue = params['number'];
    });
  }

  ngOnInit() {
    this.github.comments(this.owner, this.repository, this.issue)
      .then((comments: any) => {
        comments = comments.map((comment: CommentModel, i) => {
          return comment[i] = {
            message: comment.body,
            user: {
              name: comment.user.login,
              avatar: comment.user.avatar_url
            }
          };
        });

        this.comments = comments;

        this.loading = false;
      });
  }

  postComment(formComment: NgForm): void {
    this.github.comment(this.owner, this.repository, this.issue, this.comment)
      .subscribe( data => console.log(data) );
  }

}

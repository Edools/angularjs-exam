import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github/github.service';

import { RepositoryModel } from '../models/repository.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;

  repositories: Object[] = [];

  per_page: number = 16;
  page: number;
  current_page: number 

  constructor(
    private github: GithubService
  ) { }

  ngOnInit() {
    this.github.repositories()
      .then((repositories: Object[]) => {
        repositories = repositories.map((repository: RepositoryModel, i) => {
          return repository[i] = {
            name: repository.name,
            url: repository.html_url,
            path: repository.full_name,
            owner: {
              name: repository.owner.login,
              avatar: repository.owner.avatar_url
            }
          };
        });

        this.repositories = repositories;

        this.loading = false;
      });
  }

}

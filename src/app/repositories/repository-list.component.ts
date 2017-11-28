import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { SearchRepositoriesService } from './search-repositories.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  
  results: any[] = [];
  totalCount: string;
  error_text: string = "";

  constructor(private searchService: SearchRepositoriesService) { }

  ngOnInit() {
    this.error_text = "";
    this.searchService.getRepositories("filter").subscribe(
        data => {
          this.totalCount = data.total_count;          
          this.results = data.items;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Repositories found. Try again";
          console.error(error);
        }
      );
    
  }

  search(repository: string) {
    
    this.error_text = "";
    this.searchService.getRepositories(repository).subscribe(
        data => {
          this.totalCount = data.total_count;
          this.results = data.items;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Repositories found. Try again";
          console.error(error);
        }
      );
    
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

import { RepositoryListComponent } from "./repository-list.component";
import { RouterModule } from "@angular/router";

import { SearchRepositoriesService } from "./search-repositories.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forChild([
      { path: 'repositories', component: RepositoryListComponent }
    ])
  ],
  declarations: [ RepositoryListComponent ],
  providers: [ SearchRepositoriesService ]
})
export class RepositoryModule { }

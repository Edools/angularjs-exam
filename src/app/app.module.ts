import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepositoyComponent } from './repositoy/repositoy.component';
import { IssuesComponent } from './issues/issues.component';
import { NotFoundComponent } from './notfound/notfound.component';

import { GithubService } from './services/github/github.service';

import { SharedModule } from './shared/shared.module';

import { ROUTING } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RepositoyComponent,
    IssuesComponent,
    NotFoundComponent
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitSearcherComponent } from './git-searcher/git-searcher.component';
import { InfoButtonComponent } from './info-button/info-button.component';



@NgModule({
  declarations: [
    AppComponent,
    GitSearcherComponent,
    InfoButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

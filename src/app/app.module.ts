import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { UtilitiesService } from './shared/utilities.service';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './form-search/form-search.component';



@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

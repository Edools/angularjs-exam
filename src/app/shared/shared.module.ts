import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardIssueComponent } from './card-issue/card-issue.component';
import { CardCommentComponent } from './card-comment/card-comment.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    CardComponent,
    CardIssueComponent,
    CardCommentComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardIssueComponent,
    CardCommentComponent,
    FooterComponent
  ]
})
export class SharedModule { }

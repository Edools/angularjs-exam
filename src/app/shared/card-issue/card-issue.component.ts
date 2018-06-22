import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-issue',
  templateUrl: './card-issue.component.html',
  styleUrls: ['./card-issue.component.scss']
})
export class CardIssueComponent implements OnInit {

  @Input() data: object;

  constructor() { }

  ngOnInit() {
  }

}

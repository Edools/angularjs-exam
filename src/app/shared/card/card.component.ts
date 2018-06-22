import { Component, OnInit, Input } from '@angular/core';

import { RepositoryModel } from '../../models/repository.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: object;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github/github.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nativeWindow: any;

  constructor(
    private github: GithubService
  ) {}

  ngOnInit() {
  }

  auth() { }

}

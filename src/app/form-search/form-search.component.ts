import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilitiesService } from './../shared/utilities.service';
import { UserModel } from './form-search.model';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  dataModel = new UserModel();

  constructor(private _urlService: UtilitiesService) { }

  ngOnInit() {
  }

  onSaveUserName(_userName) {

    // Repository List
    this._urlService.getListRepository(_userName)
      .subscribe( repository => {
          this.dataModel.repository = repository;
        });
    // Data user
    this._urlService.getUrlUsername(_userName)
      .subscribe( data => {
          this.dataModel.avatar = data['avatar_url'];
          this.dataModel.name = data['name'];
          this.dataModel.login = '@' + data['login'];
          this.dataModel.profileUrl = data['html_url'];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occurred.');
          } else {
            console.log('Server-side error occurred.');
          }
        });
  }
}

import { Component, OnInit } from '@angular/core';
import {EditProfileComponentBase} from './edit-profile.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'two-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends EditProfileComponentBase implements OnInit {

  constructor(store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
  }

}

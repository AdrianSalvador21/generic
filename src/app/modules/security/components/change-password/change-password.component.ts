import { Component, OnInit } from '@angular/core';
import {ChangePasswordComponentBase} from './change-password.component.base';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'two-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends ChangePasswordComponentBase implements OnInit {

  constructor(fb: FormBuilder, store: Store<AppState>) {
    super(fb, store);
  }

  ngOnInit() {
  }

}

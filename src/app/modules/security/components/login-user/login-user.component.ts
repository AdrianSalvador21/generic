import {Component} from '@angular/core';
import {LoginUserComponentBase} from './login-user.component.base';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'two-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent extends LoginUserComponentBase {
  constructor(fb: FormBuilder, store: Store<AppState>, router: Router) {
    super(fb, store, router);
  }
}

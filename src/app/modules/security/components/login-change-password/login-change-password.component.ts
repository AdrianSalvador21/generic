import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';
import {NavService} from '../../../../core/services/nav.service';
import {LoginChangePasswordComponentBase} from './login-change-password.component.base';

@Component({
  selector: 'two-login-password',
  templateUrl: './login-change-password.component.html',
  styleUrls: ['./login-change-password.component.scss']
})
export class LoginChangePasswordComponent extends LoginChangePasswordComponentBase {
  constructor(fb: FormBuilder, authService: AuthenticationService, store: Store<AppState>, router: Router, navService: NavService) {
    super(fb, authService, store, router, navService);
  }
}

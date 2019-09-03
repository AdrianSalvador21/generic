import {Component} from '@angular/core';
import {LoginPasswordComponentBase} from './login-password.component.base';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';
import {NavService} from '../../../../core/services/nav.service';
import {AppConfig} from '../../../../config/app.config';
import * as contextInfoActions from '../../../../core/store/actions/context-info.actions';

@Component({
  selector: 'two-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.scss']
})
export class LoginPasswordComponent extends LoginPasswordComponentBase {
  constructor(fb: FormBuilder, authService: AuthenticationService, store: Store<AppState>, router: Router, navService: NavService) {
    super(fb, authService, store, router, navService);
  }

  cancel() {
    this.store.dispatch(new contextInfoActions.Reset());
    this.router.navigate([AppConfig.routes.security.login.user.url]);
  }
}

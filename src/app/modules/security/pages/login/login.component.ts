import {Component} from '@angular/core';
import {LoginComponentBase} from './login.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'two-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginComponentBase {
  constructor(store: Store<AppState>, router: Router) {
    super(store, router);
  }
}

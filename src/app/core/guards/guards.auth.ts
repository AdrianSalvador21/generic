import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardBase} from './guards.auth.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable({providedIn: 'root'})
export class AuthGuard extends AuthGuardBase {

  constructor(router: Router, store: Store<AppState>) {
    super(router, store);
  }
}

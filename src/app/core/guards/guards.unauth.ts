import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UnAuthGuardBase} from './guards.unauth.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable({providedIn: 'root'})
export class UnAuthGuard extends UnAuthGuardBase {

  constructor(router: Router, store: Store<AppState>) {
    super(router, store);
  }
}

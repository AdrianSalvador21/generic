import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationServiceBase} from './authentication.service.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable({providedIn: 'root'})
export class AuthenticationService extends AuthenticationServiceBase {
  constructor(http: HttpClient, store: Store<AppState>) {
    super(http, store);
  }
}

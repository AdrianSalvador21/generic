import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {AuthenticationService} from '../services/authentication.service';
import {ErrorInterceptorBase} from './error.interceptor.base';


@Injectable()
export class ErrorInterceptor extends ErrorInterceptorBase {

  constructor(store: Store<AppState>,
              authenticationService: AuthenticationService) {
    super(store, authenticationService);
  }

}

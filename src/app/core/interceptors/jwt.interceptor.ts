import {Injectable} from '@angular/core';
import {JwtInterceptorBase} from './jwt.interceptor.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable()
export class JwtInterceptor extends JwtInterceptorBase {

  constructor(store: Store<AppState>) {
    super(store);
  }

}

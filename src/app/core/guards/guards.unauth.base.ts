import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as contextInfoActions from '../store/actions/context-info.actions';
import {AppConfig} from '../../config/app.config';

@Injectable({providedIn: 'root'})
export class UnAuthGuardBase implements CanActivate {

  protected contextInfoState;

  constructor(protected router: Router,
              protected store: Store<AppState>) {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url === AppConfig.routes.security.login.url) {
      this.store.dispatch(new contextInfoActions.Reset());
      this.router.navigate([AppConfig.routes.security.login.user.url]);
      return false;
    }

    if (!!this.contextInfoState.user) {
      this.store.dispatch(new contextInfoActions.Reset());
    }
    return true;
  }
}

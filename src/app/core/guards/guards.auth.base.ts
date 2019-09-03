import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {AppConfig} from '../../config/app.config';

@Injectable({providedIn: 'root'})
export class AuthGuardBase implements CanActivate {

  protected contextInfoState;

  constructor(protected router: Router,
              protected store: Store<AppState>) {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!this.contextInfoState.user && !this.contextInfoState.user.forceChangePassword && !this.contextInfoState.user.forceRecoveryMode) {
      return true;
    } else {
      this.router.navigate([AppConfig.routes.security.login.user.url],
        {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({providedIn: 'root'})
export class PartialAuthGuardBase implements CanActivate {

  constructor(protected router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /*if (state.url.indexOf('/' + AppConfig.routes.security.login) > -1) {
      localStorage.removeItem(AppConfig.sessionLocalStorageKey);
      return true;
    }

    const sessionData = JSON.parse(localStorage.getItem(AppConfig.sessionLocalStorageKey));
    if (sessionData && sessionData.sessionID && sessionData.role) {
      const allowedRoles: Role[] = route.data.roles;
      const userRoles: string[] = (<string>sessionData.role).split(',');
      if (allowedRoles.some((role: Role) => userRoles.indexOf(<string>role.valueOf()) > -1)) {
        // logged in so return true
        return true;
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/' + AppConfig.routes.security.root + '/' + AppConfig.routes.security.login],
      {queryParams: {returnUrl: state.url}});
    return false;*/
    return true;
  }
}

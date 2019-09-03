import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppConfig} from '../../config/app.config';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as contextInfoActions from '../store/actions/context-info.actions';
import {AuthenticationService} from '../services/authentication.service';


@Injectable()
export class ErrorInterceptorBase implements HttpInterceptor {

  protected contextInfoState;

  constructor(protected store: Store<AppState>,
              protected authenticationService: AuthenticationService) {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && !!this.contextInfoState.user) {
        // auto logout if 401 response returned from api
        this.store.dispatch(new contextInfoActions.Reset());
        location.reload(true);
        this.authenticationService.logout();
      } else if ([405, 404, 500].includes(err.status)) {
        this.store.dispatch(new contextInfoActions.GenericError(err.error.message || err.statusText));
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}

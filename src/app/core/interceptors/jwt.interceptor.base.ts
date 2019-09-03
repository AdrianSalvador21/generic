import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {AppConfig} from '../../config/app.config';

@Injectable()
export class JwtInterceptorBase implements HttpInterceptor {

  protected contextInfoState;

  constructor(protected store: Store<AppState>) {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const sessionData = JSON.parse(localStorage.getItem(''));
    if (!!this.contextInfoState && !!this.contextInfoState.user && !!this.contextInfoState.user.sessionID) {
      request = request.clone({
        setHeaders: {
          sessionID: `${this.contextInfoState.user.sessionID}`
        }
      });
    }

    return next.handle(request);
  }
}

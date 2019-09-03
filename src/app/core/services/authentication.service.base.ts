import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppConfig} from '../../config/app.config';
import * as contextInfoActions from '../store/actions/context-info.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable({providedIn: 'root'})
export class AuthenticationServiceBase {
  protected  contextInfoState;
  constructor(protected http: HttpClient,
              protected store: Store<AppState>) {
  }

  login(username: string, password: string) {
    localStorage.setItem('inProcess', 'inProcess');
    return this.http.post<any>(AppConfig.endpoints.sessionManager + 'auth/login',
      {
        userName: username,
        domainApplication: AppConfig.domainApplication,
        applicationID: AppConfig.applicationID,
        aditionalData: {},
        password: password,
        role: '',
        userAgent: 'Consola - sitio alterno'
      })
      .pipe(map(response => {
        localStorage.removeItem('inProcess');
        return response;
      }));
  }

  logout() {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
    });
    if (this.contextInfoState !== null) {
      return this.http.get<any>(AppConfig.endpoints.sessionManager + 'session/close',
        {
          headers: {
            'sessionID': this.contextInfoState.sessionID
          }
        }).pipe(map(response => {
      })).subscribe(res => {
        this.store.dispatch(new contextInfoActions.Reset());
      }, error => {
        this.store.dispatch(new contextInfoActions.Reset());
      });
    }
  }
}





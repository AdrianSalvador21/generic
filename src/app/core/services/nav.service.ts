import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {NavServiceBase} from './nav.service.base';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NavService extends NavServiceBase {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(router: Router, http: HttpClient) {
    super(router, http);
  }
}

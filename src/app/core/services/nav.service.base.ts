import {Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AppConfig} from '../../config/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NavServiceBase {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(protected router: Router, protected http: HttpClient) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  getMenu( userID: string): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'QUERY': {
          'header': {
            'idChannel': '' ,
            'channelRef': '' ,
            'msgId': '',
            'serviceId': 'ZGC_GET_MENUJERA_BY_USER' ,
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'V_AppaApplication4132': 'GENERIC_CONSOLE',
              'V_AppUserId4132': userID,
              'V_Return': ''
            }
          }
        }


      });
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../../config/app.config';

@Injectable({providedIn: 'root'})
export class SearchServiceBase {
  constructor(protected http: HttpClient) {
  }
  searchName( name: string): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

    {
      'QUERY': {
      'header': {
        'idChannel': '' ,
          'channelRef': '' ,
          'msgId': '',
          'serviceId': 'ZGC_GET_USERS' ,
          'queryType': ' ',
          'responseType': 'C'
      },
      'body': {
        'params': {
          'v_NAMEID': name,
            'vRETURN': ''
        }
      }
    }
  });
  }
}




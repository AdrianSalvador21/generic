import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../../config/app.config';

export class UserServiceBase {

  constructor(protected http: HttpClient) {
  }


  getUserDetail(userId: string): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',
      {
        'QUERY': {
          'header': {
            'idChannel': '' ,
            'channelRef': '' ,
            'msgId': '',
            'serviceId': 'ZGC_GET_USER_DETAIL',
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'V_USERID': userId,
              'V_RETURN': ''
            }
          }
        }
      });
  }

  rolesUsers( partyID: string): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'QUERY': {
          'header': {
            'idChannel': '',
            'channelRef': '',
            'msgId': '',
            'serviceId': 'ZGC_GET_ROLES_BY_USER',
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'vUSERID': partyID,
              'vRETURNROLES': ''
            }
          }
        }
      });
  }

  rolesUpdate(variableNewRoles: string, variableID: string): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'QUERY': {
          'header': {
            'idChannel': '',
            'channelRef': '',
            'msgId': '',
            'serviceId': 'ZGC_UPDATE_ROLES_BY_USER',
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'V_USERPROFILEROLES': variableNewRoles,
              'V_USERID4009': variableID,
              'V_DOMAINAPPLICATIONID4034': '2INNOVATEIT'
            }
          }
        }
      });
  }

  getSecretQuestions(): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'QUERY': {
          'header': {
            'idChannel': '',
            'channelRef': '',
            'msgId': '',
            'serviceId': 'ZGC_GET_SECURITY_QUESTIONS',
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'V_Return': ''
            }
          }
        }
      });
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'headerRQ': {
          'msgId': '',
          'timestamp': '',
          'channelRef': '',
          'channelId': 'RIOBAMBAAPP',
          'transactionType': 'EN-A-OL-S'
        },
        'messageRQ':
          {
            'domainApp': '',
            'password': '123123',
            'userId': data.userName,
            'firstname': data.firstname,
            'middlename': '',
            'lastname': data.lastname,
            'lastname2': data.lastname2,
            'partyType': 'X',
            'documentId': data.documentId,
            'documentType': data.docuemntType,
            'documentCountry': data.country,
            'citizenship': data.citizenship,
            'birthDay': data.birthDay._i,
            'phone': data.phone,
            'email': data.email,
            'gender': 'M',
            'additionals': {}
          }
      });
  }

  getDataLoan(): Observable<any> {
    return this.http.post<any>(AppConfig.endpoints.dynamicServiceBroker + 'UI/UI_SERVICES/SECURED/JSON/CUSTOM/{ID}/{CHANNELID}',

      {
        'QUERY': {
          'header': {
            'idChannel': '',
            'channelRef': '',
            'msgId': '',
            'serviceId': 'ZGC_GET_CARLOANS',
            'queryType': ' ',
            'responseType': 'C'
          },
          'body': {
            'params': {
              'vReturn': ''
            }
          }
        }
      });
  }
}

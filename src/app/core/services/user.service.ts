import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserServiceBase} from './user.service.base';

@Injectable({providedIn: 'root'})
export class UserService extends UserServiceBase {
  constructor(http: HttpClient) {
    super(http);
  }
}

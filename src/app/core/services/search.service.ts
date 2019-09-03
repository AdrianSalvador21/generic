import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchServiceBase} from './search.service.base';

@Injectable({providedIn: 'root'})
export class SearchService extends SearchServiceBase {
  constructor(http: HttpClient) {
    super(http);
  }
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PartialAuthGuardBase} from './guards.partial-auth.base';

@Injectable({providedIn: 'root'})
export class PartialAuthGuard extends PartialAuthGuardBase {

  constructor(router: Router) {
    super(router);
  }
}

import {OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../config/app.config';

export class LoginComponentBase extends BaseComponent implements OnInit {

  constructor(store: Store<AppState>, protected router: Router) {
    super(store);
  }

  ngOnInit() {
    this.router.navigate([AppConfig.routes.security.login.user.url]);
  }

}

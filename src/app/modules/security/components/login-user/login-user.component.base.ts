import {OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import * as contextInfoActions from '../../../../core/store/actions/context-info.actions';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../config/app.config';

export class LoginUserComponentBase extends BaseComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required]
  });

  get formData() {
    return this.loginForm.value;
  }

  constructor(protected fb: FormBuilder,
              store: Store<AppState>,
              protected  router: Router) {
    super(store);
  }

  ngOnInit() {
  }

  loginSubmit() {
    this.store.dispatch(new contextInfoActions.SetUsername(this.formData.username));
    this.router.navigate([AppConfig.routes.security.login.password.url]);
  }

}

import {OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import * as contextInfoActions from '../../../../core/store/actions/context-info.actions';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Router} from '@angular/router';
import {NavService} from '../../../../core/services/nav.service';
import {AppConfig} from '../../../../config/app.config';

export class LoginPasswordComponentBase extends BaseComponent implements OnInit {

  loginForm = this.fb.group({
    password: ['', Validators.required]
  });
  protected username = undefined;
  error: string;

  get formData() {
    return this.loginForm.value;
  }

  constructor(protected fb: FormBuilder,
              protected authService: AuthenticationService,
              store: Store<AppState>,
              protected router: Router,
              protected navService: NavService) {
    super(store);
  }

  ngOnInit() {
    this.store.select('contextInfo').subscribe(data => {
      if (!!data.username) {
        this.username = data.username;
      } else {
        this.router.navigate([AppConfig.routes.security.login.user.url]);
      }

    });
  }

  loginSubmit() {
    this.loading = true;
    // Load user
    this.authService.login(this.username, this.formData.password).subscribe(response => {
      if (response.errorCode === 0) {
        response['userName'] = this.username;
        if (!response['forceChangePassword']) {
          // Load menu
          this.navService.getMenu(response.userID).subscribe(menuResponse => {
            if (menuResponse.errorCode === '0' && !!menuResponse.data && menuResponse.data.length > 0) {
              this.store.dispatch(new contextInfoActions.LoadUser(response));
              this.store.dispatch(new contextInfoActions.LoadMenu(menuResponse.data));
              this.loading = false;
            } else {
              // set error en pantalla
              this.loading = false;
            }
          });
        } else {
          this.router.navigate([AppConfig.routes.security.login.changePassword.url]);
          this.loading = false;
        }
      } else {
        this.error = response;
        this.loading = false;
      }
    }, error => {
      this.error = error;
      this.loading = false;
    });
  }

}

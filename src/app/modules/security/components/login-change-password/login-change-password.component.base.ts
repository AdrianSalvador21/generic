import {OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import * as contextInfoActions from '../../../../core/store/actions/context-info.actions';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Router} from '@angular/router';
import {NavService} from '../../../../core/services/nav.service';

export class LoginChangePasswordComponentBase extends BaseComponent implements OnInit {

  loginForm = this.fb.group({
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required]
  });

  passwordStrengthValue = 0;
  hideNew = true;
  hideConfirm = true;

  get formValue() {
    return this.loginForm.getRawValue();
  }
  protected username = undefined;

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
    // this.store.select('contextInfo').subscribe(data => {
    //   if (!!data.username) {
    //     this.username = data.username;
    //   } else {
    //     this.router.navigate([AppConfig.routes.security.login.user.url]);
    //   }
    //
    // });
  }


  loginSubmit() {
    this.loading = true;
    // Load user
    this.authService.login(this.username, this.formData.password).subscribe(response => {
      if (response.errorCode === 0) {
        response['userName'] = this.username;
        // Load menu
        this.navService.getMenu(response.userID).subscribe(menuResponse => {
          if (menuResponse.errorCode === '0' && !!menuResponse.data && menuResponse.data.length > 0) {
            this.store.dispatch(new contextInfoActions.LoadUser(response));
            this.store.dispatch(new contextInfoActions.LoadMenu(menuResponse.data));
          } else {
            // set error en pantalla
            this.loading = false;
          }
        });
      } else {
        // set error en pantalla
        this.loading = false;
      }
    }, error => {
      // set error en pantalla
      this.loading = false;
    });
  }

  validatePasswordStrength(value) {
    this.passwordStrengthValue = value !== null ? value : 0;
  }

}

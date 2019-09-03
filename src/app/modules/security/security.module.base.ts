import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {SecurityRoutingModule} from './security-routing.module';
import {LoginUserComponent} from './components/login-user/login-user.component';
import {NgModule} from '@angular/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import {ProfileComponent} from './pages/profile/profile.component';
import {SecretQuestionComponent} from './components/secret-question/secret-question.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {MaterialModule} from '../../shared/modules/material.module';
import {LoginPasswordComponent} from './components/login-password/login-password.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginChangePasswordComponent} from './components/login-change-password/login-change-password.component';
import {LoginQuestionsComponent} from './components/login-questions/login-questions.component';

export const SECURITY_MODULE_BASE: NgModule = {
  imports: [
    PasswordStrengthMeterModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    LoginUserComponent,
    LoginPasswordComponent,
    LoginChangePasswordComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    SecretQuestionComponent,
    LoginQuestionsComponent
  ],
  entryComponents: [],
  providers: [],
  exports: []
};

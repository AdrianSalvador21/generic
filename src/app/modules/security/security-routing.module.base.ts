import {Routes} from '@angular/router';
import {LoginUserComponent} from './components/login-user/login-user.component';
import {AppConfig} from '../../config/app.config';
import {ProfileComponent} from './pages/profile/profile.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {SecretQuestionComponent} from './components/secret-question/secret-question.component';
import {UnAuthGuard} from '../../core/guards/guards.unauth';
import {AuthGuard} from '../../core/guards/guards.auth';
import {LoginPasswordComponent} from './components/login-password/login-password.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginChangePasswordComponent} from './components/login-change-password/login-change-password.component';
import {LoginQuestionsComponent} from './components/login-questions/login-questions.component';

export const SECURITY_ROUTES_BASE: Routes = [
  {
    path: AppConfig.routes.security.login.key,
    component: LoginComponent,
    canActivate: [UnAuthGuard],
    children:
      [
        {
          path: AppConfig.routes.security.login.user.key,
          component: LoginUserComponent,
          canActivate: [UnAuthGuard]
        },
        {
          path: AppConfig.routes.security.login.password.key,
          component: LoginPasswordComponent,
          canActivate: [UnAuthGuard]
        },
        {
          path: AppConfig.routes.security.login.changePassword.key,
          component: LoginChangePasswordComponent,
          canActivate: [UnAuthGuard]
        },
        {
          path: AppConfig.routes.security.login.secretQuestions.key,
          component: LoginQuestionsComponent,
          canActivate: [UnAuthGuard]
        },
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: AppConfig.routes.security.login.user.key
        }
      ]
  },
  {
    path: AppConfig.routes.security.profile.key,
    component: ProfileComponent,
    children:
      [
        {
          path: AppConfig.routes.security.profile.edit.key,
          component: EditProfileComponent,
          canActivate: [AuthGuard]
        },
        {
          path: AppConfig.routes.security.profile.password.key,
          component: ChangePasswordComponent,
          canActivate: [AuthGuard]
        },
        {
          path: AppConfig.routes.security.profile.secretQuestion.key,
          component: SecretQuestionComponent,
          canActivate: [AuthGuard]
        },
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: AppConfig.routes.security.profile.edit.url,
          canActivate: [AuthGuard]
        }
      ]
  }
];


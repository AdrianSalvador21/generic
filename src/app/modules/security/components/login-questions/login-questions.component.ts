import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';
import {NavService} from '../../../../core/services/nav.service';
import {LoginQuestionsComponentBase} from './login-questions.component.base';
import {UserService} from '../../../../core/services/user.service';

@Component({
  selector: 'two-login-question',
  templateUrl: './login-questions.component.html',
  styleUrls: ['./login-questions.component.scss']
})
export class LoginQuestionsComponent extends LoginQuestionsComponentBase {
  constructor(fb: FormBuilder, store: Store<AppState>, router: Router, userService: UserService) {
    super(fb, store, router, userService);
  }
}

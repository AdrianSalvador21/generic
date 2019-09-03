import {Component} from '@angular/core';
import {HeaderComponentBase} from './header.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'two-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent extends HeaderComponentBase {
  constructor(store: Store<AppState>, authenticationService: AuthenticationService, userService: UserService) {
    super(store, authenticationService, userService);
  }
}

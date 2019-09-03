import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HighDetailUserAdministrationBaseComponent} from './high-detail-user-administration.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {UserService} from '../../../../core/services/user.service';


@Component({
  selector: 'two-high-detail-user-administration',
  templateUrl: './high-detail-user-administration.component.html',
  styleUrls: ['./high-detail-user-administration.component.scss']

})
export class HighDetailUserAdministrationComponent extends HighDetailUserAdministrationBaseComponent {
  constructor(protected fb: FormBuilder,
              protected userService: UserService,
              protected store: Store<AppState>) {
    super(fb, userService, store);
  }
}

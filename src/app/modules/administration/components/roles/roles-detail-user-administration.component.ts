import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RolesDetailUserAdministrationBaseComponent} from './roles-detail-user-administration.component.base';
import {SearchService} from '../../../../core/services/search.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {UserService} from '../../../../core/services/user.service';


@Component({
  selector: 'two-roles-detail-user-administration',
  templateUrl: './roles-detail-user-administration.component.html',
  styleUrls: ['./roles-detail-user-administration.component.scss']

})
export class RolesDetailUserAdministrationComponent extends RolesDetailUserAdministrationBaseComponent {
  constructor(protected fb: FormBuilder,
              protected userService: UserService,
              protected store: Store<AppState>) {
    super(fb, userService, store);
  }
}

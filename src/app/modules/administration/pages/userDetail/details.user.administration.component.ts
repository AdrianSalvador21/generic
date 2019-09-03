import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {DetailsUserAdministrationBaseComponent} from './details.user.administration.component.base';

@Component({
  selector: 'two-details-user-administration',
  templateUrl: './details.user.administration.component.html',
  styleUrls: ['./details.user.administration.component.scss']

})
export class DetailsUserAdministrationComponent extends DetailsUserAdministrationBaseComponent {

  constructor(fb: FormBuilder, router: Router, rolesService: UserService, store: Store<AppState>) {
    super(fb, router, rolesService, store);
  }
}

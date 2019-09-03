import {OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AppConfig} from '../../../../config/app.config';
import {AdministrationState} from '../../reducers/administration.reducer';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {BaseComponent} from '../../../../core/components/base/base.component';




export class DetailsUserAdministrationBaseComponent extends BaseComponent implements OnInit {
  roles: any;

  protected administrationState: AdministrationState;
  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected userService: UserService,
              store: Store<AppState>) {
    super(store);
    this.store.select(AppConfig.reducers.administration).subscribe(administrationState => {
      this.administrationState = administrationState;
      if (this.administrationState.user  === undefined) {
        this.router.navigate([AppConfig.routes.administration.users.search.url]);
      } else {
        console.log(administrationState);
      }
    });
  }
  ngOnInit() {
      this.getData();
  }
  getData() {
    const partyID = this.administrationState.user['PARTYID2010'];
    this.roles = undefined;
    this.userService.rolesUsers(partyID).subscribe(response => {
      if (response.errorCode !== '0') {
        return;
      }
      if (response.data.length === 0) {
      }
      this.roles = response.data;
    });
  }
}

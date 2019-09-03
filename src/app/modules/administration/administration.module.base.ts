import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {AdministrationUserComponent} from './pages/administration/administration.user.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SearchUserAdministrationComponent} from './pages/search/search.user.administration.component';
import {DataUserAdministrationComponent} from './components/data/administration-user-data.component';
import {InputUserAdministrationComponent} from './components/input/administration-user-input.component';
import {ListUserAdministrationComponent} from './components/list/administration-user-list.component';
import {DetailsUserAdministrationComponent} from './pages/userDetail/details.user.administration.component';
import {ProfileUserAdministrationComponent} from './components/profile/administration-user-profile.component';
import {HighUserAdministrationComponent} from './pages/highUser/high.user.administration.component';
import {HighDetailUserAdministrationComponent} from './components/highDetail/high-detail-user-administration.component';
import {RolesDetailUserAdministrationComponent} from './components/roles/roles-detail-user-administration.component';

export const ADMINISTRATION_MODULE_BASE: NgModule = {
  imports: [
    FormsModule,
    MaterialModule,
    AdministrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdministrationUserComponent,
    SearchUserAdministrationComponent,
    InputUserAdministrationComponent,
    ListUserAdministrationComponent,
    DetailsUserAdministrationComponent,
    DataUserAdministrationComponent,
    ProfileUserAdministrationComponent,
    HighUserAdministrationComponent,
    HighDetailUserAdministrationComponent,
    RolesDetailUserAdministrationComponent
  ],
  entryComponents: [],
  providers: [],
  exports: []
};

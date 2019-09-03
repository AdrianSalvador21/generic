import {Routes} from '@angular/router';
import {AppConfig} from '../../config/app.config';
import {AdministrationUserComponent} from './pages/administration/administration.user.component';
import {SearchUserAdministrationComponent} from './pages/search/search.user.administration.component';
import {DetailsUserAdministrationComponent} from './pages/userDetail/details.user.administration.component';
import {HighUserAdministrationComponent} from './pages/highUser/high.user.administration.component';

export const ADMINISTRATION_ROUTES_BASE: Routes = [
  {
    path: AppConfig.routes.administration.users.key, component: AdministrationUserComponent, children: [
      {path: AppConfig.routes.administration.users.search.key, component: SearchUserAdministrationComponent},
      {path: AppConfig.routes.administration.users.details.key, component: DetailsUserAdministrationComponent },
      {path: AppConfig.routes.administration.users.high.key, component: HighUserAdministrationComponent },
      {path: '**', pathMatch: 'full', redirectTo: '/' + AppConfig.routes.administration.users.search.url}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: '/' + AppConfig.routes.administration.users.url}
];


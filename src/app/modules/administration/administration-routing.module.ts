import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ADMINISTRATION_ROUTES_BASE} from './administration-routing.module.base';


@NgModule({
  imports: [
    RouterModule.forChild(ADMINISTRATION_ROUTES_BASE)
  ],
  exports: [
    RouterModule
  ]
})

export class AdministrationRoutingModule {
}

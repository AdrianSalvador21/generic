import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SECURITY_ROUTES_BASE} from './security-routing.module.base';

@NgModule({
  imports: [
    RouterModule.forChild(SECURITY_ROUTES_BASE)
  ],
  exports: [
    RouterModule
  ]
})

export class SecurityRoutingModule {
}

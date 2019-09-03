import {NgModule} from '@angular/core';
import {SECURITY_MODULE_BASE} from './security.module.base';

@NgModule({
  imports: [
    SECURITY_MODULE_BASE.imports
  ],
  declarations: [
    SECURITY_MODULE_BASE.declarations
  ],
  entryComponents: [
    SECURITY_MODULE_BASE.entryComponents
  ],
  providers: [
    SECURITY_MODULE_BASE.providers
  ],
  exports: [
    SECURITY_MODULE_BASE.exports
  ]
})

export class SecurityModule {
}

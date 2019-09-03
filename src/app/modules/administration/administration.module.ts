import {NgModule} from '@angular/core';
import {ADMINISTRATION_MODULE_BASE} from './administration.module.base';

@NgModule({
  imports: [
    ADMINISTRATION_MODULE_BASE.imports
  ],
  declarations: [
    ADMINISTRATION_MODULE_BASE.declarations
  ],
  entryComponents: [
    ADMINISTRATION_MODULE_BASE.entryComponents
  ],
  providers: [
    ADMINISTRATION_MODULE_BASE.providers
  ],
  exports: [
    ADMINISTRATION_MODULE_BASE.exports
  ]
})

export class AdministrationModule {
}



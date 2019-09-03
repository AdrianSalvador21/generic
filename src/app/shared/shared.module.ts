import {NgModule} from '@angular/core';


import {SHARED_MODULE_BASE} from './shared.module.base';

@NgModule({
  imports: [
    SHARED_MODULE_BASE.imports
  ],
  exports: [
    SHARED_MODULE_BASE.exports
  ],
  entryComponents: [
    SHARED_MODULE_BASE.entryComponents
  ],
  declarations: [
    SHARED_MODULE_BASE.declarations
  ],
  providers: [
    SHARED_MODULE_BASE.providers
  ]
})

export class SharedModule {
}

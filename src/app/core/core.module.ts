import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {CORE_MODULE_BASE} from './core.module.base';

@NgModule({
  imports: [
    CORE_MODULE_BASE.imports
  ],
  declarations: [
    CORE_MODULE_BASE.declarations
  ],
  entryComponents: [
    CORE_MODULE_BASE.entryComponents
  ],
  providers: [
    CORE_MODULE_BASE.providers
  ],
  exports: [
    CORE_MODULE_BASE.exports
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

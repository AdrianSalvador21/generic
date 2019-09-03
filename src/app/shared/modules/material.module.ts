import {NgModule} from '@angular/core';
import {MATERIAL_MODULE_BASE} from './material.module.base';

@NgModule({
  imports: [
    MATERIAL_MODULE_BASE.imports
  ],
  declarations: [
    MATERIAL_MODULE_BASE.declarations
  ],
  entryComponents: [
    MATERIAL_MODULE_BASE.entryComponents
  ],
  providers: [
    MATERIAL_MODULE_BASE.providers
  ],
  exports: [
    MATERIAL_MODULE_BASE.exports
  ]
})

export class MaterialModule {
}

import {NgModule} from '@angular/core';
// NgRedux imports
// Global redux files
import {APP_MODULE_BASE} from './app.module.base';

@NgModule({
  imports: [
    APP_MODULE_BASE.imports
  ],
  declarations: [
    APP_MODULE_BASE.declarations
  ],
  providers: [
    APP_MODULE_BASE.providers
  ],
  bootstrap: [
    APP_MODULE_BASE.bootstrap
  ]
})

export class AppModule {
}

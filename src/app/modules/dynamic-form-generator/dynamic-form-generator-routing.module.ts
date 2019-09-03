import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormPreviewComponent} from './pages/form-preview.component';
import {DynamicFormPageComponent} from './pages/dynamic-form-page/dynamic-form-page.component';

const dynamicFormGeneratorRoutes: Routes = [
  {path: 'example', component: FormPreviewComponent},
  {path: '', component: DynamicFormPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(dynamicFormGeneratorRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DynamicFormGeneratorRoutingModule {
}

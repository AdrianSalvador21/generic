import {NgModule} from '@angular/core';
import {FormPreviewComponent} from './pages/form-preview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {SelectComponent} from './components/select/select.component';
import {DateComponent} from './components/date/date.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DynamicFieldDirective} from './components/dynamic-field/dynamic-field.directive';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {SharedModule} from '../../shared/shared.module';
import {DynamicFormGeneratorRoutingModule} from './dynamic-form-generator-routing.module';
import { DynamicFormPageComponent } from './pages/dynamic-form-page/dynamic-form-page.component';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
import { ButtonConfigComponent } from './components/button-config/button-config.component';
import { CheckboxConfigComponent } from './components/checkbox-config/checkbox-config.component';
import { DateConfigComponent } from './components/date-config/date-config.component';
import { InputConfigComponent } from './components/input-config/input-config.component';
import { RadiobuttonConfigComponent } from './components/radiobutton-config/radiobutton-config.component';
import { SelectConfigComponent } from './components/select-config/select-config.component';
import { UniqueDateComponent } from './components/unique-date/unique-date.component';
import { PeriodDateComponent } from './components/period-date/period-date.component';

@NgModule({
  declarations: [
    FormPreviewComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicFormPageComponent,
    DynamicFormSelectComponent,
    ButtonConfigComponent,
    CheckboxConfigComponent,
    DateConfigComponent,
    InputConfigComponent,
    RadiobuttonConfigComponent,
    SelectConfigComponent,
    UniqueDateComponent,
    PeriodDateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormGeneratorRoutingModule
  ],
  providers: [],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class DynamicFormGeneratorModule {
}

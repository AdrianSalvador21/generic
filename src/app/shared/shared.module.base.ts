import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmPasswordDialogComponent} from './components/confirm-password-dialog/confirm-password-dialog.component';
import {FullScreenSpinnerComponent} from './components/full-screen-spinner/full-screen-spinner.component';
import {MOMENT_DATE_FORMATS, MomentDateAdapter} from './helpers/momend-date-adapter';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import {AutofocusDirective} from './directives/auto-focus.directive';
import {GenericErrorComponent} from './components/generic-error/generic-error.component';
import {AllBrandsDialogComponent} from './components/client-form-cars-dialog/all-brand-dialog.component';
import {CapitalizePipe} from './pipes/capitalizePipe.pipe';

export const SHARED_MODULE_BASE: NgModule = {
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    FullScreenSpinnerComponent,
    AutofocusDirective,
    CapitalizePipe
  ],
  entryComponents: [
    ConfirmPasswordDialogComponent,
    AllBrandsDialogComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS},
  ],
  declarations: [
    ConfirmPasswordDialogComponent,
    FullScreenSpinnerComponent,
    AutofocusDirective,
    GenericErrorComponent,
    AllBrandsDialogComponent,
    CapitalizePipe ]
  
};

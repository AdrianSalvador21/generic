import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {ConfirmPasswordDialogComponentBase} from './confirm-password-dialog.component.base';

export interface ConfirmPasswordData {
  data: any;
}

@Component({
  selector: 'two-confirm-password',
  templateUrl: 'confirm-password-dialog.component.html',
  styleUrls: ['confirm-password-dialog.component.scss']
})

export class ConfirmPasswordDialogComponent extends ConfirmPasswordDialogComponentBase {

  constructor(
    dialogRef: MatDialogRef<ConfirmPasswordData>,
    @Inject(MAT_DIALOG_DATA) data: ConfirmPasswordData,
    fb: FormBuilder,
    store: Store<AppState>
  ) {
    super(dialogRef, data, fb, store);
  }
}

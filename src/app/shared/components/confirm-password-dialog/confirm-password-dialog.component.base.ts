import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {BaseComponent} from '../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

export interface ConfirmPasswordData {
  data: any;
}

export class ConfirmPasswordDialogComponentBase extends BaseComponent {

  passwordForm = this.fb.group({
    password: ['']
  });

  hide = true;

  constructor(
    public dialogRef: MatDialogRef<ConfirmPasswordData>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmPasswordData,
    protected fb: FormBuilder,
    store: Store<AppState>
  ) {
    super(store);
  }

  sendValue() {
    this.dialogRef.close(this.passwordForm.controls.password.value);
  }
}

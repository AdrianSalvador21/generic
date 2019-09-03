import {OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

export class ChangePasswordComponentBase extends BaseComponent implements OnInit {

  passwordForm = this.fb.group({
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  passwordStrengthValue = 0;
  hideNew = true;
  hideConfirm = true;

  get formValue() {
    return this.passwordForm.getRawValue();
  }

  constructor(protected fb: FormBuilder, store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
  }

  validatePasswordStrength(value) {
    this.passwordStrengthValue = value !== null ? value : 0;
  }

}

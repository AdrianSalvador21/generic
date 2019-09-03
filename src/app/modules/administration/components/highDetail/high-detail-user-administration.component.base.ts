import {OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {UserService} from '../../../../core/services/user.service';


export class HighDetailUserAdministrationBaseComponent extends BaseComponent  implements OnInit {
  @ViewChild('form')directiveForm: FormGroupDirective;

  highForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    lastname2: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    documentId: ['', Validators.required],
    citizenship: ['', Validators.required],
    birthDay: ['', Validators.required],
    phone: ['', Validators.required],
    documentType: [''],
    country: [''],
  });
  documentTypes = ['CURP', 'RFC', 'DNI'];
  countries = ['México', 'Argentina', 'USA'];
  constructor(protected fb: FormBuilder,
              protected userService: UserService,
              protected store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
  }
  sendDataHigh() {
    const data = this.highForm.getRawValue();
    console.log(data.birthDay._i);
    this.userService.sendData(this.highForm.getRawValue()).subscribe(response => {
      if (response.errorCode !== '0') {

        return;
      }
      if (response.data.length === 0) {
        this.loading = false;
        return;
      }
      this.loading = false;
    });
    this.directiveForm.resetForm();
  }

}

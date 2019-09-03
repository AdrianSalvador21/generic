import {Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

export class DataUserAdministrationBaseComponent extends BaseComponent implements OnInit {
  @Input() data: any;
  fieldsDetail = ['FIRSTNAME2010', 'LASTNAME2010', 'EMAIL2010', 'CELLPHONE2010', 'NATIONALITY2010'];
  constructor(protected fb: FormBuilder,
              protected store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {
    console.log(this.data);
  }
}


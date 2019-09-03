import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataUserAdministrationBaseComponent} from './administration-user-data.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';


@Component({
  selector: 'two-administration-user-data',
  templateUrl: './administration-user-data.component.html',
  styleUrls: ['./administration-user-data.component.scss']
})
export class DataUserAdministrationComponent extends DataUserAdministrationBaseComponent {

  constructor(protected fb: FormBuilder,
              protected store: Store<AppState>) {
    super(fb, store);
  }
}

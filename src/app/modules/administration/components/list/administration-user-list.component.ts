import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {ListUserAdministrationBaseComponent} from './administration-user-list.component.base';

@Component({
  selector: 'two-administration-user-list',
  templateUrl: './administration-user-list.component.html',
  styleUrls: ['./administration-user-list.component.scss']
  })
export class ListUserAdministrationComponent extends ListUserAdministrationBaseComponent {
  constructor(fb: FormBuilder, router: Router, store: Store<AppState>) {
    super(fb, router, store);
  }
}


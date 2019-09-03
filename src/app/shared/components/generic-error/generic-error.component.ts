import {Component} from '@angular/core';
import {GenericErrorComponentBase} from './generic-error.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'two-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss']
})
export class GenericErrorComponent extends GenericErrorComponentBase {

  constructor(store: Store<AppState>) {
    super(store);
  }

}

import {BaseComponent} from '../base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

export class FooterComponentBase extends BaseComponent {
  constructor(store: Store<AppState>) {
    super(store);
  }
}

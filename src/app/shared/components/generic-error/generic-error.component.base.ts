import {BaseComponent} from '../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

export class GenericErrorComponentBase extends BaseComponent {

  constructor(store: Store<AppState>) {
    super(store);
  }

}

import {BaseComponentBase} from './base.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {NavService} from '../../services/nav.service';

export abstract class BaseComponent extends BaseComponentBase {
  protected constructor(store: Store<AppState>) {
    super(store);
  }
}

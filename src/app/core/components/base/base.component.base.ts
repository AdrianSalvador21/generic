import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import * as contextInfoActions from '../../store/actions/context-info.actions';

export abstract class BaseComponentBase {
  protected constructor(protected store: Store<AppState>) {
  }

  set loading(value: boolean) {
    this.store.dispatch(new contextInfoActions.SetLoader(value));
  }

}

import { ActionReducerMap } from '@ngrx/store';

// reducers
import * as userReducer from './core/store/reducers/context-info.reducer';
import {AppBaseState, baseReducers} from './app.reducer.base';


export interface AppState extends AppBaseState {
}

export const appReducers: ActionReducerMap<any> = {
  ...baseReducers
};


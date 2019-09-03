import {ActionReducerMap} from '@ngrx/store';
// reducers
import * as contextInfoReducer from './core/store/reducers/context-info.reducer';
import * as administrationReducer from './modules/administration/reducers/administration.reducer';

export interface AppBaseState {
  contextInfo: contextInfoReducer.ContextInfoState;
  administration: administrationReducer.AdministrationState;

}

export const baseReducers: ActionReducerMap<AppBaseState> = {
  contextInfo: contextInfoReducer.contextInfoReducer,
  administration: administrationReducer.administrationReducer

};




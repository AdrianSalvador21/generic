import {Action} from '@ngrx/store';

export const LOAD_USER = '[Administration] Load User';


export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public user: any) {
  }
}

export type administrationActions = LoadUser;

import {Action} from '@ngrx/store';

export const LOAD_USER = '[ContextInfo] Load User';
export const LOAD_USER_DETAIL = '[ContextInfo] Load User Detail';
export const SET_LOADER = '[ContextInfo] Set Loader';
export const RESET = '[ContextInfo] Reset the Context Info';
export const LOAD_MENU = '[ContextInfo] Load Menu';
export const SET_USERNAME = '[ContextInfo] Set Username in the context';
export const GENERIC_ERROR = '[ContextInfo] Launch generic error';
export const CLEAN_GENERIC_ERROR = '[ContextInfo] Clean generic error';

export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public user: any) {
  }
}

export class LoadUserDetail implements  Action {
  readonly type = LOAD_USER_DETAIL;
  constructor(public userDetail: any) {
  }
}

export class SetUsername implements Action {
  readonly type = SET_USERNAME;

  constructor(public username: string) {
  }
}

export class SetLoader implements Action {
  readonly type = SET_LOADER;

  constructor(public loading: boolean) {
  }
}

export class Reset implements Action {
  readonly type = RESET;

  constructor() {
  }
}

export class GenericError implements Action {
  readonly type = GENERIC_ERROR;

  constructor(public error: string) {
  }
}

export class CleanGenericError implements Action {
  readonly type = CLEAN_GENERIC_ERROR;

  constructor() {
  }
}

export class LoadMenu implements Action {
  readonly type = LOAD_MENU;

  constructor(public menu: any) {
  }
}


export type contextInfoActions = LoadUser | LoadUserDetail | SetUsername | SetLoader | Reset | LoadMenu | GenericError | CleanGenericError;

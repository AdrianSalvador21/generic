import * as fromContextInfo from '../actions/context-info.actions';

export interface ContextInfoState {
  user: any;
  userDetail: any;
  menu: any;
  loading: boolean;
  username: string;
  error: string;
}

const initialState: ContextInfoState = {
  user: undefined,
  userDetail: undefined,
  menu: undefined,
  loading: false,
  username: undefined,
  error: undefined
};

export function contextInfoReducer(state = initialState, action: fromContextInfo.contextInfoActions): ContextInfoState {

  switch (action.type) {

    case fromContextInfo.LOAD_USER:
      return {
        ...state,
        user: action.user
      };

    case fromContextInfo.LOAD_USER_DETAIL:
      return {
        ...state,
        userDetail: action.userDetail
      };

    case fromContextInfo.SET_USERNAME:
      return {
        ...state,
        username: action.username
      };

    case fromContextInfo.SET_LOADER:
      return {
        ...state,
        loading: action.loading
      };

    case fromContextInfo.RESET:
      return {
        ...state,
        user: undefined,
        menu: undefined,
        username: undefined,
        error: undefined
      };

    case fromContextInfo.LOAD_MENU:
      return {
        ...state,
        menu: action.menu
      };

    case fromContextInfo.GENERIC_ERROR:
      return {
        ...state,
        error: action.error
      };

    case fromContextInfo.CLEAN_GENERIC_ERROR:
      return {
        ...state,
        error: undefined
      };

    default:
      return state;

  }
}

import * as fromAdministration from '../actions/administration.action';

export interface AdministrationState {
  user: any;
}

const initialState: AdministrationState = {
  user: undefined
};

export function administrationReducer(state = initialState, action: fromAdministration.administrationActions): AdministrationState {

  switch (action.type) {

    case fromAdministration.LOAD_USER:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;

  }
}

import { OPEN_AUTH_FORM, CLOSE_AUTH_FORM } from '../constants/index';

const defaultState = {
  openAuthForm: false
};

export const authorizationFormReducer = (state = defaultState, action) => {
  switch (action.type){
    case OPEN_AUTH_FORM:
      return {...state, openAuthForm: true};
    case CLOSE_AUTH_FORM:
      return {...state, openAuthForm: false};
    default:
      return state;
  }
}
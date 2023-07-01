import { LOG_IN, LOG_OUT } from '../constants/index';

const defaultState = {
  authorized: false,
  openAuthForm: false
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type){
    case LOG_IN:
      return {...state, authorized: action.token, openAuthForm: false};
    case LOG_OUT:
      return {...state, authorized: false, openAuthForm: false};
    default:
      return state;
  }
}
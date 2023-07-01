import { OPEN_CLIENT_INFO_FORM, CLOSE_CLIENT_INFO_FORM } from '../constants/index';

const defaultState = {
  openClientInfoForm: false
};

export const infoClientFormReducer = (state = defaultState, action) => {
  switch (action.type){
    case OPEN_CLIENT_INFO_FORM:
      return {...state, openClientInfoForm: action.clientData};
    case CLOSE_CLIENT_INFO_FORM:
      return {...state, openClientInfoForm: false};
    default:
      return state;
  }
}
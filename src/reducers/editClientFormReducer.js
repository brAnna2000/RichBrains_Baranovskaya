import { OPEN_EDIT_CLIENT_FORM, CLOSE_EDIT_CLIENT_FORM } from '../constants/index';

const defaultState = {
  openEditClientForm: false
};

export const editClientFormReducer = (state = defaultState, action) => {
  switch (action.type){
    case OPEN_EDIT_CLIENT_FORM:
      return {...state, openEditClientForm: action.clientData};
    case CLOSE_EDIT_CLIENT_FORM:
      return {...state, openEditClientForm: false};
    default:
      return state;
  }
}
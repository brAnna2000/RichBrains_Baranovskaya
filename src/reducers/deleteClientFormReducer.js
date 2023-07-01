import { OPEN_DELETE_CLIENT_FORM, CLOSE_DELETE_CLIENT_FORM } from '../constants/index';

const defaultState = {
  openDeleteClientForm: false
};

export const deleteClientFormReducer = (state = defaultState, action) => {
  switch (action.type){
    case OPEN_DELETE_CLIENT_FORM:
      return {...state, openDeleteClientForm: action.clientId};
    case CLOSE_DELETE_CLIENT_FORM:
      return {...state, openDeleteClientForm: false};
    default:
      return state;
  }
}

export const openDeleteClientFormAction = (clientId) => ({type: OPEN_DELETE_CLIENT_FORM, clientId});
export const closeDeleteClientFormAction = () => ({type: CLOSE_DELETE_CLIENT_FORM});
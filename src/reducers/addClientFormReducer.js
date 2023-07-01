import { OPEN_ADD_CLIENT_FORM, CLOSE_ADD_CLIENT_FORM } from '../constants/index';

const defaultState = {
  openAddClientForm: false
};

export const addClientFormReducer = (state = defaultState, action) => {
  switch (action.type){
    case OPEN_ADD_CLIENT_FORM:
      return {...state, openAddClientForm: true};
    case CLOSE_ADD_CLIENT_FORM:
      return {...state, openAddClientForm: false};
    default:
      return state;
  }
}

export const openAddClientFormAction = () => ({type: OPEN_ADD_CLIENT_FORM});
export const closeAddClientFormAction = () => ({type: CLOSE_ADD_CLIENT_FORM});
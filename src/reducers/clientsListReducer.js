import { SET_CLIENTS_LIST } from '../constants/index';

const defaultState = {
  clientsList: []
};

export const clientsListReducer = (state = defaultState, action) => {
  switch (action.type){
    case SET_CLIENTS_LIST:
      return {...state, clientsList: action.clientsListData};
    default:
      return state;
  }
}
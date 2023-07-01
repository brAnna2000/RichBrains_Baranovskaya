import { GET_CLIENT } from '../constants/index';

const defaultState = {
  clientsList: []
};

export const getClientReducer = (state = defaultState, action) => {
  switch (action.type){
    case GET_CLIENT:
        return {...state, clientsList: action.clientData};
    default:
      return state;
  }
}
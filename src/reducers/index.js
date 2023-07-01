import * as CONSTANTS from '../constants/index';
import { combineReducers } from 'redux';
import { clientsListReducer } from "./clientsListReducer";
import { loginReducer } from "./loginReducer";
import { authorizationFormReducer } from "./authorizationFormReducer";
import { addClientFormReducer } from "./addClientFormReducer";
import { editClientFormReducer } from "./editClientFormReducer";
import { deleteClientFormReducer } from "./deleteClientFormReducer";
import { infoClientFormReducer } from "./infoClientFormReducer";
import { getClientReducer } from "./getClientReducer";
import { searchResultReducer } from "./searchResultReducer";
import { notificationReducer } from "./notificationReducer";

const defaultState = {
  isMobile: CONSTANTS.isMobile,
  userName: 'a.gerasimov',
  getClient: false,
};

export const rootReducer = combineReducers({
  clientsList: clientsListReducer,
  login: loginReducer,
  authorization: authorizationFormReducer,
  addClient: addClientFormReducer,
  editClient: editClientFormReducer,
  deleteClient: deleteClientFormReducer,
  infoClient: infoClientFormReducer,
  getClient: getClientReducer,
  searchResult: searchResultReducer,  
  notification: notificationReducer
})
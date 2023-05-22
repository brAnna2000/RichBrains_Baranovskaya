import * as CONSTANTS from '../constants/index';

const defaultState = {
    isMobile: CONSTANTS.isMobile,
    authorized: false,
    userName: 'a.gerasimov',
    clientsList: [],
    getClient: false,
    openAuthForm: false,
    openAddClientForm: false,
    openEditClientForm: false,
    openDeleteClientForm: false,
    openClientInfoForm: false,
    showNotification: false,
    searchResult: []
};

export const reducer = (state = defaultState, action) => {
    switch (action.type){
      case CONSTANTS.LOG_IN:
        return {...state, authorized: action.token, openAuthForm: false};
      case CONSTANTS.LOG_OUT:
        return {...state, authorized: false, openAuthForm: false};
      
      case CONSTANTS.SET_CLIENTS_LIST:
        return {...state, clientsList: action.clientsListData};
      
      case CONSTANTS.GET_CLIENT:
        return {...state, clientsList: action.clientData};

      case CONSTANTS.OPEN_AUTH_FORM:
        return {...state, openAuthForm: true};
      case CONSTANTS.CLOSE_AUTH_FORM:
        return {...state, openAuthForm: false};
      
      case CONSTANTS.OPEN_ADD_CLIENT_FORM:
        return {...state, openAddClientForm: true};
      case CONSTANTS.CLOSE_ADD_CLIENT_FORM:
        return {...state, openAddClientForm: false};

      case CONSTANTS.OPEN_EDIT_CLIENT_FORM:
        return {...state, openEditClientForm: action.clientData};
      case CONSTANTS.CLOSE_EDIT_CLIENT_FORM:
        return {...state, openEditClientForm: false};

      case CONSTANTS.OPEN_DELETE_CLIENT_FORM:
        return {...state, openDeleteClientForm: action.clientId};
      case CONSTANTS.CLOSE_DELETE_CLIENT_FORM:
        return {...state, openDeleteClientForm: false};

      case CONSTANTS.OPEN_CLIENT_INFO_FORM:
        return {...state, openClientInfoForm: action.clientData};
      case CONSTANTS.CLOSE_CLIENT_INFO_FORM:
        return {...state, openClientInfoForm: false};
      
      case CONSTANTS.SHOW_NOTIFICATION:
        return {...state, showNotification: action.notification};
      case CONSTANTS.HIDE_NOTIFICATION:
        return {...state, showNotification: false};

      case CONSTANTS.SET_SEARCH_RESULT:
        return {...state, searchResult: action.searchResult};
      
      default:
        return state;
    }
};
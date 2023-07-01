import { SET_SEARCH_RESULT } from '../constants/index';

const defaultState = {
  searchResult: []
};

export const searchResultReducer = (state = defaultState, action) => {
  switch (action.type){
    case SET_SEARCH_RESULT:
      return {...state, searchResult: action.searchResult};
    default:
      return state;
  }
}

export const setSearchResultAction = (searchResult) => ({type: SET_SEARCH_RESULT, searchResult});
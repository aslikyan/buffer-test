import { combineReducers } from 'redux';

import {
  CREATE_ITEM_MODAL_OPEN,
  CREATE_ITEM_MODAL_CLOSE,
  INPUT_FILL_REQUESTED,
  URL_INPUT_FILL_REQUESTED
} from '../actions/homepage'


const createNewItemReducer = () => {
  const initialState = {
    isVisible: false,
    selectedItem: null,
    nameInputVal: null,
    urlInputVal: null,
  };

  return function createNewItem(state = initialState, { type, data }) {
    switch (type) {
      case CREATE_ITEM_MODAL_OPEN:
        return { ...state, isVisible: true, selectedItem: data};
      case CREATE_ITEM_MODAL_CLOSE:
        return { ...state, isVisible: false, nameInputVal: null, urlInputVal: null};
      case INPUT_FILL_REQUESTED:
        return { ...state, nameInputVal: data, urlInputVal: data};
      case URL_INPUT_FILL_REQUESTED:
        return { ...state, urlInputVal: data};
      default:
        return state;
    }
    }
  };


export default combineReducers({
  createModal: createNewItemReducer(),
});

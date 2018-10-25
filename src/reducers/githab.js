import { combineReducers } from 'redux';

import {
    GITHAB_PULLS_REQUESTED,
} from '../actions/githab'


const createNewItemReducer = () => {
    const initialState = {
        isVisible: false,
    };

    return function createNewItem(state = initialState, { type, data }) {
        switch (type) {
            case GITHAB_PULLS_REQUESTED:
                return { ...state, isVisible: true, selectedItem: data};
            default:
                return state;
        }
    }
};


export default combineReducers({
    githab: createNewItemReducer(),
});

import { combineReducers } from 'redux';

import {
    GITHAB_PULLS_REQUESTED,
} from '../actions/githab'


const getOpenedPullRequestsReducer = () => {
    const initialState = {
        showData: false,
        pullList: null
    };

    return function getOpenedPullRequestsReducer(state = initialState, { type, data }) {
        switch (type) {
            case GITHAB_PULLS_REQUESTED:
                return { ...state, showData: true, pullList: data};
            default:
                return state;
        }
    }
};


export default combineReducers({
    githab: getOpenedPullRequestsReducer(),
});

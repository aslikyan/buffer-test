export const GITHAB_PULLS_REQUESTED = 'GITHAB_PULLS_REQUESTED';

export const getOpenedPullRequests = (data) => async (dispatch) => {
    console.log(689);return;
    dispatch({
        type: GITHAB_PULLS_REQUESTED,
        data: data
    });
};
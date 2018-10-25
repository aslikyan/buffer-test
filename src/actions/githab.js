import axios from 'axios';
export const GITHAB_PULLS_REQUESTED = 'GITHAB_PULLS_REQUESTED';

export const getOpenedPullRequests = () => async (dispatch) => {
  axios.get('https://api.github.com/repos/aslikyan/buffer-test/pulls?state=all', {}).then(function (response) { //hardcoded user/org name and repo name
      const resp = response.data
      dispatch({
      type: GITHAB_PULLS_REQUESTED,
      data: resp
    });
    });
};
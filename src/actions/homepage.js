export const CREATE_ITEM_MODAL_OPEN = 'CREATE_ITEM_MODAL_OPEN';
export const CREATE_ITEM_MODAL_CLOSE = 'CREATE_ITEM_MODAL_CLOSE';
export const INPUT_FILL_REQUESTED = 'INPUT_FILL_REQUESTED';
export const CREATE_NEW_ITEM = 'CREATE_NEW_ITEM';
export const URL_INPUT_FILL_REQUESTED = 'URL_INPUT_FILL_REQUESTED';

export const openCreateItemModal = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_ITEM_MODAL_OPEN,
    data: data
  });
};

export const closeDeleteWorkspaceModal = () => async (dispatch) => {
  dispatch({
    type: CREATE_ITEM_MODAL_CLOSE,
  });
};

export const inputFillRequested = (data) => async (dispatch) => {
  dispatch({
    type: INPUT_FILL_REQUESTED,
    data: data,
  });
};

export const createNewItem = (data) => async (dispatch) => {
  console.log(data);//there is will be request to api to save org,lib, or course
  dispatch({
    type: CREATE_NEW_ITEM,
  });
};

export const urlInputFillRequested = (data) => async (dispatch) => {
  dispatch({
    type: URL_INPUT_FILL_REQUESTED,
    data: data,
  });
};
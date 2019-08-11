import { Api } from "../../utils";

export const FETCHING_DIALOG_ALL_SUCCESS = "FETCHING_DIALOG_ALL_SUCCESS";
export const FETCHING_DIALOG_ALL_FAILURE = "FETCHING_DIALOG_ALL_FAILURE";

export const FETCHING_DIALOG_ONE_SUCCESS = "FETCHING_DIALOG_ONE_SUCCESS";
export const FETCHING_DIALOG_ONE_FAILURE = "FETCHING_DIALOG_ONE_FAILURE";

export const SET_PARTNER_USER = "SET_PARTNER_USER";

export const USER_SERCHING = "USER_SERCHING";
export const USER_UNSERCHING = "USER_UNSERCHING";
export const USER_SERCHING_SUCCESS = "USER_SERCHING_SUCCESS";
export const USER_SERCHING_FAILURE = "USER_SERCHING_FAILURE";

export const FETCHING_DIALOGS = "FETCHING_DIALOGS";
export const SET_CURRENT_DIALOG_ID = "SET_CURRENT_DIALOG_ID";

const fetchDialogAll = userId => dispatch => {
  dispatch(fetchingDialogs());
  return Api.dialogApi
    .getAll(userId)
    .then(data => {
      dispatch(fetchDialogAllSuccess(data.data));
    })
    .catch(data => {
      console.log(data);
      dispatch(fetchDialogAllFailure(data));
    });
};
const fetchDialogOne = (userId, dialogId) => dispatch => {
  return Api.dialogApi
    .getOne(userId, dialogId)
    .then(data => {
      dispatch(fetchDialogOneSuccess(data.data));
    })
    .catch(data => {
      dispatch(fetchDialogOneFailure(data));
    });
};
const searchUser = username => dispatch => {
  dispatch(userSearching());
  return Api.userApi
    .findUser(username)
    .then(data => {
      dispatch(userSearchingSuccess(data.data));
    })
    .catch(data => {
      dispatch(userSearchingFailure(data.data));
    });
};
const createDialog = (userId, partnerid) => dispatch => {
  return Api.dialogApi.createDialog(userId, partnerid);
};

const setPartnerUser = userData => ({
  type: SET_PARTNER_USER,
  payload: userData,
});

const userSearchingSuccess = data => ({
  type: USER_SERCHING_SUCCESS,
  payload: data,
});
const userSearchingFailure = data => ({
  type: USER_SERCHING_FAILURE,
  payload: data,
});
const userSearching = () => ({ type: USER_SERCHING });

const fetchDialogOneSuccess = data => ({
  type: FETCHING_DIALOG_ONE_SUCCESS,
  payload: data,
});
const fetchDialogOneFailure = data => ({
  type: FETCHING_DIALOG_ONE_FAILURE,
  payload: data,
});

const setCurrentDialogId = id => ({
  type: SET_CURRENT_DIALOG_ID,
  payload: id,
});

const fetchDialogAllSuccess = data => ({
  type: FETCHING_DIALOG_ALL_SUCCESS,
  payload: data,
});
const fetchDialogAllFailure = data => ({
  type: FETCHING_DIALOG_ALL_FAILURE,
  payload: data,
});
const fetchingDialogs = () => ({
  type: FETCHING_DIALOGS,
});
const unSearch = () => ({
  type: USER_UNSERCHING,
});

export default {
  fetchDialogAll,
  setCurrentDialogId,
  fetchDialogOne,
  searchUser,
  unSearch,
  setPartnerUser,
  createDialog,
};

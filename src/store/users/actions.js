import { Api, Cookie } from "../../utils";

export const FETCHING_USERS = "FETCHING_USERS";
export const FETCHING_USER_DATA_SUCCESS = "FETCHING_USER_DATA_SUCCESS";
export const FETCHING_USER_DATA_FAILURE = "FETCHING_USER_DATA_FAILURE";
export const FETCHING_AUTH_STATUS_SUCCESS = "FETCHING_AUTH_STATUS_SUCCESS";
export const FETCHING_AUTH_STATUS_FAILURE = "FETCHING_AUTH_STATUS_FAILURE";

const fetchUserLogin = postData => dispatch => {
  dispatch(fetchingUsers());
  return Api.userApi
    .signIn(postData)
    .then(data => {
      console.log(data);
      dispatch(fetchUserDataSuccess(data.data.message));
    })
    .catch(data => {
      dispatch(fetchUserDataFailure(data.data));
    });
};
const fetchUserRegister = postData => dispatch => {
  dispatch(fetchingUsers());
  return Api.userApi
    .signUp(postData)
    .then(data => {
      dispatch(fetchUserDataSuccess(data.data.message));
    })
    .catch(data => {
      dispatch(fetchUserDataFailure(data.data));
    });
};
const fetchUserData = userId => dispatch => {
  dispatch(fetchingUsers());
  Api.userApi
    .getUserIdFromCookies()
    .then(id => {
      return id.data.user;
    })
    .then(id => {
      Api.userApi
        .userData(id)
        .then(data => {
          dispatch(fetchUserDataSuccess(data.data));
        })
        .catch(data => {
          dispatch(fetchUserDataFailure(data.data));
        });
    });
};

const fetchUserDataSuccess = data => ({
  type: FETCHING_USER_DATA_SUCCESS,
  payload: data,
});
const fetchUserDataFailure = data => {
  Cookie.deleteCookie("connect.sid");
  return { type: FETCHING_USER_DATA_FAILURE, payload: data };
};

const fetchingUsers = () => ({ type: FETCHING_USERS });

export default { fetchUserLogin, fetchUserRegister, fetchUserData };

import { Api, socket } from "../../utils";

export const FETCHING_MESSAGE_ALL_SUCCESS = "FETCHING_MESSAGE_ALL_SUCCESS";
export const FETCHING_MESSAGE_ALL_FAILURE = "FETCHING_MESSAGE_ALL_FAILURE";
export const FETCHING_MESSAGE = "FETCHING_MESSAGE";

export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const PUSH_MESSAGE_SUCCESS = "PUSH_MESSAGE_SUCCESS";
export const PUSH_MESSAGE_FAILURE = "PUSH_MESSAGE_FAILURE";

const fetchMessageAll = (userId, dialogID) => dispatch => {
  dispatch(fetchingMessages());
  return Api.messageApi
    .getAll(userId, dialogID)
    .then(data => {
      dispatch(setMessageAllSuccess(data.data));
    })
    .catch(data => {
      dispatch(setMessagelFailure(data));
    });
};

const sendMessage = (userId, dialogID, message) => dispatch => {
  return Api.messageApi
    .sendMessage(userId, dialogID, message)
    .then(data => {
      dispatch(sendMessageSuccess(data.data._dialog, data.data._id));
    })
    .catch(() => {
      dispatch(sendMessageFailure());
    });
};

const pushMessage = (userId, dialogId, messageId) => dispatch => {
  return Api.messageApi
    .getOne(userId, dialogId, messageId)
    .then(data => {
      dispatch(pushMessageSuccess(data.data));
    })
    .catch(data => {
      console.log(data);
      dispatch(pushMessageFailure(data.data));
    });
};

const setMessageAllSuccess = data => ({
  type: FETCHING_MESSAGE_ALL_SUCCESS,
  payload: data,
});
const setMessagelFailure = data => ({
  type: FETCHING_MESSAGE_ALL_FAILURE,
  payload: data,
});

const sendMessageSuccess = (dialogID, messageId) => {
  socket.emit("messageSend", dialogID, messageId);
  return { type: SEND_MESSAGE_SUCCESS };
};
const sendMessageFailure = data => ({
  type: SEND_MESSAGE_FAILURE,
  payload: data,
});

const pushMessageSuccess = data => ({
  type: PUSH_MESSAGE_SUCCESS,
  payload: data,
});
const pushMessageFailure = data => ({
  type: PUSH_MESSAGE_FAILURE,
  payload: data,
});

const fetchingMessages = () => ({
  type: FETCHING_MESSAGE,
});

export default { fetchMessageAll, sendMessage, pushMessage };

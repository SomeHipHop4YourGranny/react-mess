import {
  FETCHING_MESSAGE_ALL_SUCCESS,
  FETCHING_MESSAGE_ALL_FAILURE,
  FETCHING_MESSAGE,
  PUSH_MESSAGE_SUCCESS,
  PUSH_MESSAGE_FAILURE,
} from "./actions";

const initialState = {
  data: [],
  currentDialogId: window.location.pathname.split("dialog/")[1],
  isLoading: false,
  error: {},
};
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MESSAGE_ALL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCHING_MESSAGE_ALL_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        isLoading: false,
      };

    case PUSH_MESSAGE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case PUSH_MESSAGE_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        isLoading: false,
      };

    case FETCHING_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

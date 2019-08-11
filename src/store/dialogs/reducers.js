import {
  FETCHING_DIALOG_ALL_SUCCESS,
  FETCHING_DIALOG_ALL_FAILURE,
  FETCHING_DIALOG_ONE_SUCCESS,
  FETCHING_DIALOG_ONE_FAILURE,
  FETCHING_DIALOGS,
  SET_CURRENT_DIALOG_ID,
  USER_SERCHING,
  USER_UNSERCHING,
  USER_SERCHING_SUCCESS,
  USER_SERCHING_FAILURE,
  SET_PARTNER_USER,
} from "./actions";

const initialState = {
  data: [],
  currentDialogId: "",
  isLoading: true,
  error: {},
  currenDialogId: "",
  isSearching: false,
  searchedUsers: [],
  partnerUser: {},
};
export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DIALOG_ALL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCHING_DIALOG_ALL_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        isLoading: false,
      };
    case USER_SERCHING_SUCCESS:
      return { ...state, searchedUsers: action.payload };
    case USER_SERCHING_FAILURE:
      return { ...state, error: action.payload };
    case FETCHING_DIALOG_ONE_SUCCESS:
      return {
        ...state,
        data: state.data.map(dialog =>
          dialog._id === action.payload._id
            ? { ...dialog, ...action.payload }
            : dialog
        ),
        isLoading: false,
      };
    case FETCHING_DIALOG_ONE_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        isLoading: false,
      };
    case FETCHING_DIALOGS:
      return {
        ...state,
        isLoading: true,
      };
    case USER_SERCHING:
      return {
        ...state,
        isSearching: true,
      };
    case USER_UNSERCHING:
      return {
        ...state,
        isSearching: false,
      };
    case SET_CURRENT_DIALOG_ID:
      return {
        ...state,
        currenDialogId: action.payload,
      };
    case SET_PARTNER_USER:
      return {
        ...state,
        partnerUser: action.payload,
      };
    default:
      return state;
  }
};

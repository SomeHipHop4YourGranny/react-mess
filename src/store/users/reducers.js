import {
  FETCHING_USERS,
  FETCHING_USER_DATA_SUCCESS,
  FETCHING_USER_DATA_FAILURE
} from './actions'

const initialState = {
  data: null,
  isAuth: !!document.cookie,
  isLoading: true,
  error: {}
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuth: true,
        isLoading: false
      }
    case FETCHING_USER_DATA_FAILURE:
      return {
        ...state,
        data: {},
        error: action.payload,
        isAuth: false,
        isLoading: false
      }

    case FETCHING_USERS:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}

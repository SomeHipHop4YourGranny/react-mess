import { combineReducers } from "redux";

import { dialogReducer } from "./dialogs/reducers";
import { messageReducer } from "./messages/reducers";
import { userReducer } from "./users/reducers";

const rootReducer = combineReducers({
  dialogReducer,
  messageReducer,
  userReducer,
});

export default rootReducer;

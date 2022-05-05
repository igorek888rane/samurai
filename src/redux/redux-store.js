import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import newsPageReducer from "./newsPageReducer";
import profileReducer from "./profileReducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  newsPage: newsPageReducer,
});

const store = createStore(redusers);

export default store;

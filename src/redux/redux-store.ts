import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;
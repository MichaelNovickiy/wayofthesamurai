import {createSelector} from "reselect";
import {appStateType} from "./redux-store";
import {usersType} from './users-reducer';

export const getUsers = (state: appStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,  (users: Array<usersType>) => {
    return users.filter(u => true)
})
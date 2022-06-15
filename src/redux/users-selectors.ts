import {createSelector} from "reselect";
import {appStateType} from "./redux-store";
import {usersType} from "../types/types";

export const getUsers = (state: appStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,  (users: Array<usersType>) => {
    return users.filter(u => true)
})

export const getPageSize = (state: appStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: appStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: appStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: appStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: appStateType) => {
    return state.usersPage.followingInProgress
}

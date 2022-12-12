import {usersAPI, usersAPI as getAPI} from "../api/api";
import { photosType } from "../types/types";
import {updateObjectInArray} from "../utuls/object-helpers";
//types
const FOLLOW_BUTTON = 'FOLLOW_BUTTON'
const UNFOLLOW_BUTTON = 'UNFOLLOW_BUTTON'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type followSuccessType = {
    type: typeof FOLLOW_BUTTON, userId: number
}
type unFollowSuccessType = {
    type: typeof UNFOLLOW_BUTTON, userId: number
}
type setUsersType = {
    type: typeof SET_USERS, users: usersType
}
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE, currentPage: number
}
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT, count: number
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING, isFetching: boolean
}
type toggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number
}

export type usersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: photosType,
    status: null,
    followed: boolean,
}
let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}
export type userStateType = typeof initialState
//reducer
export const usersReducer = (state: userStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW_BUTTON: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


//action creators
export const followSuccess = (userId: number): followSuccessType => ({type: FOLLOW_BUTTON, userId})
export const unFollowSuccess = (userId: number): unFollowSuccessType => ({type: UNFOLLOW_BUTTON, userId})
export const setUsers = (users: usersType): setUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsers: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsers
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
//thanks
export const requestUsers = (page: any, pageSize: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        const data = await getAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: any, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: any) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unFollow = (userId: any) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
    }
}


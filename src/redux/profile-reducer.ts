import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFollowingProgress, unFollowSuccess} from "./users-reducer";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you?', likecount: '2'},
        {id: '2', message: 'It is my first post', likecount: '4'},
        {id: '3', message: 'I am a cat', likecount: '7'},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.values,
                likecount: 0,
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (values: any) => ({type: ADD_POST, values})
const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status: string) => ({type: SET_STATUS, status})


export const getUserProfile = (userId: any) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: any) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const getProfileThunk = (userId: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const response = await usersAPI.unFollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}
import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import { photosType } from './users-reducer';

//types
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

type profileStateType = typeof initialState
type postType = { id: string, message: string, likecount: string }
type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
type addPostACType = {
    type: typeof ADD_POST,
    values: string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
type setStatusType = {
    type: typeof SET_STATUS,
    status: string
}
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}


//initial state
let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you?', likecount: '2'},
        {id: '2', message: 'It is my first post', likecount: '4'},
        {id: '3', message: 'I am a cat', likecount: '7'},
    ] as Array<postType>,
    profile: null as null | profileType,
    status: '',
}

//reducer
export const profileReducer = (state: profileStateType = initialState, action: any): profileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: ((Math.random() * 100).toFixed(2)).toString(),
                message: action.values,
                likecount: 0,
            };
            return <profileStateType>{
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
        case SAVE_PHOTO_SUCCESS: {
            return <profileStateType>{
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

//action creators
export const addPostAC = (values: string): addPostACType => ({type: ADD_POST, values})
const setUserProfile = (profile: profileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})
const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})
const savePhotoSuccess = (photos: photosType): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

//thanks
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //some error we can add dispatch
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    // @ts-ignore
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    // @ts-ignore
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

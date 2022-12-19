import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {photosType, TOGGLE_IS_FETCHING} from './users-reducer';
import {appStateType} from './redux-store';

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
type toggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }


// selector
export const geProfileSelector = (state: appStateType) => {
    return state.profilePage
}

//initial state
let initialState = {
    postData: [
        {id: '1', message: 'How are you today?', likecount: '12'},
        {id: '2', message: 'Hello World!', likecount: '124'},
        {id: '3', message: 'It is my first post', likecount: '67'},
    ] as Array<postType>,
    profile: null as null | profileType,
    status: '',
    isFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
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
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

//thanks
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
    dispatch(toggleIsFetching(false))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
    dispatch(toggleIsFetching(false))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //some error we can add dispatch
    }
    dispatch(toggleIsFetching(false))
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    // @ts-ignore
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
    dispatch(toggleIsFetching(false))

}
export const saveProfile = (profileData: any) => async (dispatch: any, getState: any) => {
    dispatch(toggleIsFetching(true))
    const userId = getState().auth.id;
    // @ts-ignore
    const response = await profileAPI.saveProfile(profileData);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
    dispatch(toggleIsFetching(false))
}

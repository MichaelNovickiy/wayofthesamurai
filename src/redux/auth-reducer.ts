import {authAPI, securityAPI} from '../api/api';
import {appStateType} from './redux-store';

//types
const SET_USER_DATA = 'AUTH_SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'
const SET_ERROR = 'SET_ERROR'
type stateType = typeof initialState;
type setAuthUserDataPayloadType = { id: number | null, email: string | null, login: string | null, isAuth: boolean }
type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataPayloadType
}
type getCaptchaUrlSuccessType = { type: typeof GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl: string } }

// selector
export const geAuthSelector = (state: appStateType) => {
    return state.auth
}

//initial state
let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    error: ''
}

//reducer
export const authReducer = (state: stateType = initialState, action: any): stateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, ...action.payload}
        }
        case SET_ERROR: {
            return {...state, error: action.payload}
        }

        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => (
    {type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const setError = (errorMessage: string): any => ({type: SET_ERROR, payload: errorMessage})

//thanks
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(setError(message))
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
    dispatch(setError(''))
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


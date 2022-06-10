import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {required} from "../utuls/validators/validators";

const SET_USER_DATA = 'AUTH_SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getCaptchaUrlSuccess = (captchaUrl: string) => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


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
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


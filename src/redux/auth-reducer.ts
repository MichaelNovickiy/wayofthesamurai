const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}})


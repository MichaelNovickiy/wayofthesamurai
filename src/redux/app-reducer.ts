import {getAuthUserData} from './auth-reducer';

//types
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type stateType = {
    initialized: boolean
}
type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type actionType = {
    type: typeof INITIALIZED_SUCCESS
}
//initial state
let initialState: stateType = {
    initialized: false
}
//reducer
export const appReducer = (state = initialState, action: actionType): stateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

//Action Creator
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS})
//Thank
export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
};


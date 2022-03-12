const FOLLOW_BUTTON = 'FOLLOW_BUTTON'
const UNFOLLOW_BUTTON = 'UNFOLLOW_BUTTON'
const SET_USERS = 'SET_USERS'

export type usersType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
type InitialStateType = {
    users: Array<usersType>
}
// export type InitialStateType = typeof initialState

let initialState: InitialStateType = {
    users: []
    // as Array <usersType>,
}

export const usersReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            return {
                ...state, users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: true}
                    }
                    return m;
                })
            }
        }
        case UNFOLLOW_BUTTON: {
            return {
                ...state, users: state.users.map(m => {
                    if (m.id === action.userId) {
                        return {...m, followed: false}
                    }
                    return m;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW_BUTTON, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW_BUTTON, userId})
export const setUsersAC = (users: usersType) => ({type: SET_USERS, users})

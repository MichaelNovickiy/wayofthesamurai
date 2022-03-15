const FOLLOW_BUTTON = 'FOLLOW_BUTTON'
const UNFOLLOW_BUTTON = 'UNFOLLOW_BUTTON'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


export type usersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: { small: any, large: any },
    status: null,
    followed: boolean,
}
type InitialStateType = {
    users: Array<usersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
// export type InitialStateType = typeof initialState

let initialState: InitialStateType = {
    users: [],
    pageSize: 3,
    totalUsersCount: 20,
    currentPage: 3
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW_BUTTON, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW_BUTTON, userId})
export const setUsersAC = (users: usersType) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})

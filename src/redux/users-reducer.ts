const FOLLOW_BUTTON = 'FOLLOW_BUTTON'
const UNFOLLOW_BUTTON = 'UNFOLLOW_BUTTON'
const SET_USERS = 'SET_USERS'

type usersType = {
    id: string,
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
    users: [
        {id: '1', followed: false, fullName: 'Mikel', status: "I am unemployed", location: {city: 'Minsk', country: 'Belarus'}},
        {id: '2', followed: false, fullName: 'Alex', status: 'Chilling', location: {city: 'Rim', country: 'Italy'}},
        {id: '3', followed: true, fullName: 'Daddy', status: 'I am silly bear', location: {city: 'Moscow', country: 'Russia'}},
        {id: '4', followed: true, fullName: 'Suzy', status: 'Relax', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
    // as Array <usersType>,
}

export const usersReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            return {...state, users: state.users.map(m=>{
                if (m.id === action.userId) {
                    return {...m, followed: true}
                }
                return m;
                })}
        }
        case UNFOLLOW_BUTTON: {
            return {...state, users: state.users.map(m=>{
                    if (m.id === action.userId) {
                        return {...m, followed: false}
                    }
                    return m;
                })}
        }
        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW_BUTTON, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW_BUTTON, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})

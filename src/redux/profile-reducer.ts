const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you?', likecount: '2'},
        {id: '2', message: 'It is my first post', likecount: '4'},
        {id: '3', message: 'I am a cat', likecount: '7'},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_DATA: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_DATA, newText: text})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
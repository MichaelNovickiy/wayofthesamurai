const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'

let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you?', likecount: '2'},
        {id: '2', message: 'It is my first post', likecount: '4'},
        {id: '3', message: 'I am a cat', likecount: '7'},
    ],
        newPostText: '',
}

export const profileReducer = (state:any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0,
            };
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_DATA: {
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text: any) => ({type: UPDATE_NEW_POST_DATA, newText: text})
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'

export const profileReducer = (state: any, action: any) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likecount: 2,
        };
        state.postData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_DATA) {
        state.newPostText = action.newText;
    }
    return state;
}
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'

let store ={
    _state: {
        profilePage: {
            postData: [
                {id: '1', message: 'Hi, how are you?', likecount: '2'},
                {id: '2', message: 'It is my first post', likecount: '4'},
                {id: '3', message: 'I am a cat', likecount: '7'},

            ],
            newPostText: '',
        },
        messagesPage: {
            dialogData: [
                {id: 1, name: 'Mike'},
                {id: 2, name: 'Nik'},
                {id: 3, name: 'Lex'},
                {id: 4, name: 'Pop'},
                {id: 5, name: 'Dima'},

            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yhoho'}
            ],
        },
        sideBar: {},
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likecount: 2,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_DATA){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_DATA, newText: text})

export default store;
window.store = store
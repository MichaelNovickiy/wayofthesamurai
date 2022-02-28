import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
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
            newMessageText: '',
        },
        sideBar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state)
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_DATA, newText: text})

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (messageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody})

export default store;
window.store = store
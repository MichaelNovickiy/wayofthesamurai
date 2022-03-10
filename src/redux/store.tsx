import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

type PostDataType = {
    id: string
    message: string
    likecount: string
}
type DialogDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}

type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
type MessagesPageType = {
    dialogData: Array<DialogDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: any
}

export type StoreType = {
    _state: StateType
    _callSubscriber: any
    getState: any
    subscribe:any
    dispatch: any
}


let store: StoreType = {
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
    subscribe(observer : any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;

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
        }
    },
    _callSubscriber () {
        console.log('blabla');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likecount: 2,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPGRATE-NEW-POST-DATA'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}
export default store;
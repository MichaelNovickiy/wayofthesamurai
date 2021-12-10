import {rerenderEntireTree} from "../render";

export let state = {
    profilePage: {
        postData : [
            {id: '1', message: 'Hi, how are you?', likecount: '2' },
            {id: '2', message: 'It is my first post', likecount: '4' },
            {id: '3', message: 'I am a cat', likecount: '7' },

        ],
    },
    messagesPage:{
        dialogData : [
            {id: 1, name: 'Mike'},
            {id: 2, name: 'Nik'},
            {id: 3, name: 'Lex'},
            {id: 4, name: 'Pop'},
            {id: 5, name: 'Dima'},

        ],
        messageData : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yhoho'}
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost ={
        id: "5",
        message: postMessage,
        likecount: '0',
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}
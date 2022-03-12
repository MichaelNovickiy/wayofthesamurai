const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageText: action.messageBody
            }
        }
        case SEND_MESSAGE : {
            let messageBody = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 4, message: messageBody}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (messageBody: any) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody})
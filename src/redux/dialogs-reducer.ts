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
    newMessageBody: '',
}

export const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let messageBody = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: messageBody}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody: any) => ({type: SEND_MESSAGE, newMessageBody})
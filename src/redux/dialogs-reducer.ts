const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.messageBody;
            return state
        case SEND_MESSAGE :
            let messageBody = state.newMessageText;
            state.newMessageText = '';
            state.messageData.push({id: 4, message: messageBody})
            return state
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (messageBody: any) => ({type: UPDATE_NEW_MESSAGE_BODY, messageBody})
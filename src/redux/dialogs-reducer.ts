const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: any, action: any) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.messageBody;
    } else if (action.type === SEND_MESSAGE) {
        let messageBody = state.newMessageText;
        state.newMessageText = '';
        state.messageData.push({id: 4, message: messageBody})
    }
    return state;
}
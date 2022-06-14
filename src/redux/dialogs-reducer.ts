//types
type actionType = {
    type: typeof SEND_MESSAGE
    newMessageBody?: string
}
const SEND_MESSAGE = 'SEND_MESSAGE'
type dialogStateType = typeof initialState
type dialogType = {
    id: number
    name: string
}
type messageType = {
    id: number
    message: string
}
type sendMessageACType={
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
//initial state
let initialState = {
    dialogData: [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Nik'},
        {id: 3, name: 'Lex'},
        {id: 4, name: 'Pop'},
        {id: 5, name: 'Dima'},
    ] as Array<dialogType>,
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yhoho'}
    ] as Array<messageType>,
    newMessageBody: '',
}
//reducer
export const dialogsReducer = (state: dialogStateType = initialState, action: actionType): dialogStateType => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let messageBody = action.newMessageBody;
            return <dialogStateType>{
                ...state,
                messageData: [...state.messageData, {id: 4, message: messageBody}]
            };
        }
        default:
            return state;
    }
}
//action creator
export const sendMessageAC = (newMessageBody: string): sendMessageACType => ({type: SEND_MESSAGE, newMessageBody})
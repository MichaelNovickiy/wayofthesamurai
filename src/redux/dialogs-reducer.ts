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
type sendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

//initial state
let initialState = {
    dialogData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Daria'},
        {id: 4, name: 'Dmitriy'},
    ] as Array<dialogType>,
    messageData: [
        {id: 1, message: 'Hello World!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do?'}
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
                messageData: [...state.messageData,
                    {
                        id: ((Math.random() * 100).toFixed(2)).toString(),
                        message: messageBody
                    }]
            };
        }
        default:
            return state;
    }
}

//action creator
export const sendMessageAC = (newMessageBody: string): sendMessageACType => ({type: SEND_MESSAGE, newMessageBody})
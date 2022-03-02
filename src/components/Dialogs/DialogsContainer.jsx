import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onMessageChange = (messageBody) => {
        props.store.dispatch(updateNewMessageBodyAC(messageBody));
    }
    let sendMessage = () => {
        props.store.dispatch(sendMessageAC());
    }

    return <Dialogs onMessageChange={onMessageChange}
                    sendMessage={sendMessage}
                    messagesPage={state}/>
}
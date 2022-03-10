import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().messagesPage;

            let onMessageChange = (messageBody) => {
                store.dispatch(updateNewMessageBodyAC(messageBody));
            }
            let sendMessage = () => {
                store.dispatch(sendMessageAC());
            }
            return (
                <Dialogs onMessageChange={onMessageChange}
                         sendMessage={sendMessage}
                         messagesPage={state}/>
            )
        }
        }
    </StoreContext.Consumer>
}
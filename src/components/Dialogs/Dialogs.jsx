import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

export const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messageData.map(m => <Message message={m.message} id={m.id}/>)

    let onMessageChange = (e) => {
        let messageBody = e.target.value;
        props.dispatch(updateNewMessageBodyAC(messageBody));
    }
    let sendMessage = () => {
        props.dispatch(sendMessageAC());
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
                <textarea placeholder='Enter your message'
                    value={props.state.newMessageText}
                    onChange={onMessageChange}
                />
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    )
}
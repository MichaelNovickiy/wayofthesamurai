import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messageData.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageText;

    let onMessageChange = (event) => {
        let messageBody = event.target.value;
        props.onMessageChange(messageBody);
    }
    let sendMessage = () => {
        props.sendMessage();
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
                <textarea placeholder='Enter your message'
                          value={newMessageBody}
                          onChange={onMessageChange}
                />
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
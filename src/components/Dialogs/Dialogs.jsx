import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.state.messageData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
               { dialogElements }
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
        </div>
    )
}
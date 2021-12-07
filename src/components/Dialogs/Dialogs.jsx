import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

export const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Nik'},
        {id: 3, name: 'Lex'},
        {id: 4, name: 'Pop'},
        {id: 5, name: 'Dima'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yhoho'}
    ]
    let dialogElements = dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = messageData.map(m => <Message message={m.message} id={m.id}/>)

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
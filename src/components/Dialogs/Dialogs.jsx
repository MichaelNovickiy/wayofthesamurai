import React from "react";
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = (props) => {

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

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name='Mike' id='1'/>
                <DialogItem name='Nik' id='2'/>
                <DialogItem name='Lex' id='3'/>
                <DialogItem name='Pop' id='4'/>
                <DialogItem name='Dim' id='5'/>
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yhoho'/>
            </div>
        </div>
    )
}
import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utuls/validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControls";

const Dialogs = (props) => {
    let state = props.messagesPage
    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = state.messageData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    let addNewMessage=(values)=>{props.sendMessage(values.newMessageBody)}

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message" /></div>
            <div><button>Send Message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;
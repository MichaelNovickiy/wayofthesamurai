import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {FormToAdd} from '../Common/FormToAdd';
import {Form} from 'antd';
import ListItems from '../Common/ListItems';

const Dialogs = (props) => {
    let state = props.messagesPage
    // console.log(state.dialogData)

    const [form] = Form.useForm();

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        form.resetFields();
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <h3>Friends</h3>
                <ListItems posts={state.dialogData} avatar/>
            </div>
            <div className={c.messages}>
                <h3>Messages</h3>
                <ListItems posts={state.messageData}/>
                <FormToAdd onSubmit={addNewMessage} form={form} name="newMessageBody" buttonText="Add message"/>
            </div>

        </div>
    )
}

export default Dialogs;
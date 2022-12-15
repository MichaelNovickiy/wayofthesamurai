import React from 'react';
import style from './Dialogs.module.css'
import {FormToAdd} from '../Common/FormToAdd';
import {Form} from 'antd';
import ListItems from '../Common/ListItems';

const Dialogs = (props) => {
    const [form] = Form.useForm();

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        form.resetFields();
    }

    return (
        <div className={style.dialogs}>
            <div>
                <h3>Friends</h3>
                <ListItems posts={props.messagesPage.dialogData} avatar/>
            </div>
            <div>
                <h3>Messages</h3>
                <ListItems posts={props.messagesPage.messageData}/>
                <FormToAdd onSubmit={addNewMessage} form={form} name="newMessageBody" buttonText="Add message"/>
            </div>
        </div>
    )
}

export default Dialogs;
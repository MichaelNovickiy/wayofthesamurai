import React from 'react';
import {Divider, Form} from 'antd';
import {FormToAdd} from '../../Common/FormToAdd';
import ListItems from '../../Common/ListItems';

const MyPosts = React.memo(props => {
            const [form] = Form.useForm();

            let addNewPost = (values) => {
                props.addPost(values.newPostBody)
                form.resetFields();
            }

            return (
                <>
                    <Divider orientation="left">My post:</Divider>
                    {/*NEW POST FORM*/}
                    <FormToAdd onSubmit={addNewPost} form={form} name="newPostBody" buttonText="Add post"/>
                    {/*POSTS*/}
                    <ListItems posts={props.posts} avatar/>
                </>
            )
        }
    )
;

export default MyPosts;

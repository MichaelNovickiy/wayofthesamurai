import React from 'react';
import {Button, Form} from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const FormToAdd = ({onSubmit, form, name, buttonText}) => {
    return (
        <Form name={name}
              form={form}
              onFinish={onSubmit}
              style={{maxWidth: '400px', marginBottom: '20px'}}
        >
            <Form.Item name={name}>
                <TextArea allowClear
                          rows={4}
                          placeholder="Enter your message"/>
            </Form.Item>
            <Button type="primary" htmlType="submit">{buttonText}</Button>
        </Form>
    );
};
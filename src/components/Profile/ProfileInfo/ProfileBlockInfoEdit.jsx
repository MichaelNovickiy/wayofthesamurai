import React, {useState} from 'react';
import {Button, Checkbox, Divider, Form, Input} from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ProfileBlockInfoEdit = ({onSubmit, profile}) => {
    const [lookingForAJob, setLookingForAJob] = useState(profile.lookingForAJob)

    let addChanges = (values) => {
        const contacts = {
            facebook: values.facebook || null,
            github: values.github || null,
            instagram: values.instagram || null,
            mainLink: values.mainLink || null,
            twitter: values.twitter || null,
            vk: values.vk || null,
            website: values.website || null,
            youtube: values.youtube || null,
        }
        onSubmit({
            fullName: values.fullName || null,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription || null,
            aboutMe: values.aboutMe || null,
            contacts: contacts
        })
    }

    return (
        <Form name="changeProfile"
              onFinish={addChanges}
              labelCol={{span: 4}}
              wrapperCol={{span: 8}}
              initialValues={{...profile, ...profile.contacts}}
        >
            {<Button type="primary" htmlType="submit" style={{margin: "10px"}}>Save</Button>}
            <Form.Item name="fullName" label="Full name:"><Input placeholder="Full name"/></Form.Item>
            <Form.Item name="lookingForAJob" label="Looking for a job:">
                <Checkbox checked={lookingForAJob}
                          onChange={() => setLookingForAJob(!lookingForAJob)}/>
            </Form.Item>
            <Form.Item name="lookingForAJobDescription" label="Description about a job:">
                <TextArea allowClear
                          placeholder="Description about a job"/>
            </Form.Item>
            <Form.Item name="aboutMe" label="About me:">
                <TextArea allowClear
                          placeholder="About me"/>
            </Form.Item>

            <Divider orientation="left">Contacts:</Divider>
            {Object.keys(profile.contacts).map(key => {
                return <Form.Item name={key} label={key + ':'} key={key}>
                    <Input/>
                </Form.Item>
            })}
        </Form>
    )
}

export default ProfileBlockInfoEdit
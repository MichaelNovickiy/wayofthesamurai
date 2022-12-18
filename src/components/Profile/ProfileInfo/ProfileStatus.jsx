import React, {useEffect, useState} from 'react';
import {updateStatus} from '../../../redux/profile-reducer';
import {useDispatch} from 'react-redux';
import {Input} from 'antd';
import {EditOutlined} from '@ant-design/icons';

export const ProfileStatus = ({statusText, isOwner}) => {
    let [editMode, setEditMode] = useState(false)
    let [statusLocal, setStatusLocal] = useState(statusText)
    const dispatch = useDispatch()

    useEffect(() => setStatusLocal(statusText), [statusText])

    const activateEditMode = () => isOwner && setEditMode(true)

    const deactivateEditMode = () => {
        isOwner &&
        setEditMode(false)
        dispatch(updateStatus(statusLocal));
    }

    const onStatusChange = (e) => setStatusLocal(e.currentTarget.value)

    return (
        <div style={{margin: '10px'}}>
            {!editMode && <div style={{fontSize: '20px'}}>
                <span onDoubleClick={activateEditMode}>{statusText || 'No status'}</span>
                <EditOutlined style={{marginLeft: '10px'}}/>
            </div>}

            {editMode && <div>
                <Input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                       value={statusLocal}/>
            </div>}
        </div>
    )
}

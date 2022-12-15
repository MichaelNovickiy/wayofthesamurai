import React, {useEffect, useState} from 'react';
import {updateStatus} from '../../../redux/profile-reducer';
import {useDispatch} from 'react-redux';

export const ProfileStatus = ({statusText, isOwner}) => {
    let [editMode, setEditMode] = useState(false)
    let [statusLocal, setStatusLocal] = useState(statusText)
    const dispatch = useDispatch()

    useEffect(() => {
        setStatusLocal(statusText)
    }, [statusText])

    const activateEditMode = () => {
        isOwner && setEditMode(true)
    }

    const deactivateEditMode = () => {
        isOwner &&
        setEditMode(false)
        dispatch(updateStatus(statusLocal));
    }

    const onStatusChange = (e) => {
        setStatusLocal(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode && <div style={{color: 'darkred', fontSize: '18px', fontWeight: '600'}}>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{statusText || 'No status'}</span>
            </div>}

            {editMode && <div>
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                       value={statusLocal}/>
            </div>}
        </div>
    )
}

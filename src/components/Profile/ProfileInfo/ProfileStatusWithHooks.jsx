import React, {useEffect, useState} from "react";

export const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{setStatus(props.status)}, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode && <div style={{color:'darkred', fontSize: '18px', fontWeight: '600'}}>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>}

            {editMode && <div>
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                       value={status}/>
            </div>}
        </div>
    )
}

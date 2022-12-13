import c from '../Dialogs.module.css';
import React from 'react';
import {Link} from 'react-router-dom';

export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}
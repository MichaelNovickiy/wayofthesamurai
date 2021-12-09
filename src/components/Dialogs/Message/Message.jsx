import c from "../Dialogs.module.css";
import React from "react";

export const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

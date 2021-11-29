import React from "react";
import c from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg"/>
            {props.message}
            <div>
                like
            </div>
        </div>
    )
}
import React from "react";
import c from './Post.module.css'

export const Post = () => {
    return (
        <div className={c.item}>
            <img src="https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg"/>
            post 1
            <div>like</div>
        </div>
    )
}
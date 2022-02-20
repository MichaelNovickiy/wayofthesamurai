import * as React from "react";
import c from './PostWithTS.module.css'

type propsTypeForPosts = {
    id: number
    message: string
    like: number
}

export const PostWithTS = (props: propsTypeForPosts) => {
    return (
        <div className={c.item}>
            <img src="https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg"/>
            {props.message}
            <div>
                like {props.like}
            </div>
        </div>
    )
}
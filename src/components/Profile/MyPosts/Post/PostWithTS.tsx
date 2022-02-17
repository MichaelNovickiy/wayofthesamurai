import * as React from "react";

export const PostWithTS = (props) => {
    return (
        <div >
            <img src="https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg"/>
            {props.message}
            <div>
                like {props.like}
            </div>
        </div>
    )
}
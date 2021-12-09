import React from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likecount} />)

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <textarea></textarea>
            <button></button>
            <div>
                New post
            </div>
            {postElement}
        </div>
    )
}
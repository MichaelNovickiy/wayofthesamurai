import React from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: '1', message: 'Hi, how are you?', likecount: '2' },
        {id: '2', message: 'It is my first post', likecount: '4' },
        {id: '3', message: 'I am a cat', likecount: '7' },
    ]

    let postElement = postData.map(p => <Post id={p.id} message={p.message} like={p.likecount} />)

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
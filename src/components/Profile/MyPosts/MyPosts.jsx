import React from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: '1', message: 'Hi, how are you?', likecount: '2' },
        {id: '2', message: 'It is my first post', likecount: '4' },
        {id: '3', message: 'I am a cat', likecount: '7' }
    ]

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <textarea></textarea>
            <button></button>
            <div>
                New post
            </div>
            <Post id={postData[0].id} message={postData[0].message} like={postData[0].likecount}  />
            <Post id={postData[1].id} message={postData[1].message} like={postData[1].likecount}  />
            <Post id={postData[2].id} message={postData[1].message} like={postData[1].likecount}  />
        </div>
    )
}
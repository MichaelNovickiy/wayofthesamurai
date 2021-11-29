import React from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <Post message='Hi, how are you?' />
            <Post message='It is my first post' />
            <Post message='I am a cat' />
        </div>
    )
}
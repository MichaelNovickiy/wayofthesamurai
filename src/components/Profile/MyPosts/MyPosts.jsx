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
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
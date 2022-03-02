import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return (<MyPosts addPost={addPost}
                     onPostChange={onPostChange}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}
    />)
}
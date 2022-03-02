import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return (
        <StoreContext.Consumer> (
            (store) =>
            <MyPosts addPost={addPost}
                     onPostChange={onPostChange}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}
            />)
        </StoreContext.Consumer>
}
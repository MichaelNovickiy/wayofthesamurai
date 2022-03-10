import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                // let state = props.store.getState();

                let addPost = () => {
                    store.dispatch(addPostAC());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextAC(text));
                }
                return (
                    <MyPosts addPost={addPost}
                             onPostChange={onPostChange}
                             posts={store.getState().profilePage.postData}
                             newPostText={store.getState().profilePage.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
    )
}
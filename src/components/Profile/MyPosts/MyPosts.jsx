import React from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likecount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostDate(text);
    }

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                New post
            </div>
            {postElement}
        </div>
    )
}
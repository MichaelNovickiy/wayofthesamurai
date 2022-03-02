import React from "react";
import c from './MyPosts.module.css'
import {PostWithTS} from "./Post/PostWithTS";

export const MyPosts = (props) => {

    let postElement = props.posts.map(p => <PostWithTS id={p.id} message={p.message} like={p.likecount}/>)

    let addPost = () => {
        props.addPost();
    }
    let newPostElement = React.createRef();
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                          onKeyPress={(event) => {
                              if (event.key === 'Enter') {
                                  addPost()
                              }
                          }}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
import React from "react";
import c from './MyPosts.module.css'
import {PostWithTS} from "./Post/PostWithTS";

export const MyPosts = (props) => {

    let postElement = props.posts.map(p => <PostWithTS id={p.id} message={p.message} like={p.likecount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-DATA', newText: text});
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
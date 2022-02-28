import React from "react";
import c from './MyPosts.module.css'
import {PostWithTS} from "./Post/PostWithTS";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


export const MyPosts = (props) => {

    let postElement = props.posts.map(p => <PostWithTS id={p.id} message={p.message} like={p.likecount}/>)



    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let newPostElement = React.createRef();
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextAC(text));
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
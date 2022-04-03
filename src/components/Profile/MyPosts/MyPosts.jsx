import React from "react";
import c from './MyPosts.module.css'
import {PostWithTS} from "./Post/PostWithTS";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postElement = props.posts.map(p => <PostWithTS id={p.id} message={p.message} like={p.likecount}/>)

    let addNewPost=(values)=>{props.addPost(values.newPostBody)}

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            {postElement}
        </div>
    )
}

const AddPostFormRedux = reduxForm({form: "postAddPostForm"})(AddPostForm)

function AddPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostBody" placeholder="Enter your message"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

export default MyPosts;
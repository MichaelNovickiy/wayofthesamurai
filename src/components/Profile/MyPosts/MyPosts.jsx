import React from "react";
import c from './MyPosts.module.css'
import {PostWithTS} from "./Post/PostWithTS";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utuls/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControls";

const MyPosts = React.memo(props => {
    let postElement = [...props.posts]
        .reverse()
        .map(p => <PostWithTS key={p.id} id={p.id} message={p.message} like={p.likecount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={c.posts}>
            <h3>My post</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            {postElement}
        </div>
    )
});

const AddPostFormRedux = reduxForm({form: "postAddPostForm"})(AddPostForm)

const maxLength10 = maxLengthCreator(10)

function AddPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostBody" placeholder="Enter your message"
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

export default MyPosts;
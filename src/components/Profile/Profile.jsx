import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostDate} from "../../redux/state";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.profilePage.postData}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostDate={props.updateNewPostDate}
            />
        </div>
)
}
import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControl/FormsControls";
import {reduxForm} from "redux-form";

const ProfileBlockInfoEdit = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        {<button>Save</button>}
        <div>
            <b>Full name:</b> {createField("Full name", [], "fullName", Input)}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("", [], "lookingForAJob", Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>Description about a job:</b>
            {createField("Description about a job", [], "lookingForAJobDescription", Textarea)}
        </div>

        <div>
            <b>About me:</b>
            {createField("About me", [], "aboutMe", Textarea)}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}

const ProfileBlockInfoEditReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileBlockInfoEdit)

export default ProfileBlockInfoEditReduxForm
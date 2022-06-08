import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControl/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../Common/FormsControl/FormsControls.module.css";


const ProfileBlockInfoEdit = ({handleSubmit, profile, error}) => {
    console.log(error)
    return <form onSubmit={handleSubmit}>
        {<button>Save</button>}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
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
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                {key}: {createField("", [], "contacts." + key, Input)}
            </div>
        })}
        </div>
    </form>
}

const ProfileBlockInfoEditReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileBlockInfoEdit)

export default ProfileBlockInfoEditReduxForm
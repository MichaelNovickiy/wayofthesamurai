import React, {useState} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {userPhoto} from "../../Users/User";
import ProfileBlockInfoEditReduxForm, {ProfileBlockInfoEdit} from "./ProfileBlockInfoEdit";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}, ...props) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onChangePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={c.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <img src={profile.photos.large || userPhoto}/>
            <div className={c.description}>
                <div>
                    {isOwner && <input type={'file'} onChange={onChangePhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ?
                    <ProfileBlockInfoEditReduxForm profile={profile}
                                                   onSubmit={onSubmit}
                                                   initialValues={profile}
                    />
                    :
                    <ProfileBlockInfo profile={profile}
                                      isOwner={isOwner}
                                      goToEditMode={goToEditMode}
                    />}

            </div>
        </div>
    )
}

const ProfileBlockInfo = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>Edit profile</button>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>Description about a job:</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={c.contact}>{contactTitle}:
        <a href={contactValue} target="_blank">{contactValue}</a></div>
}
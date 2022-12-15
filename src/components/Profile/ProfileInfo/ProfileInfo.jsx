import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {userPhoto} from '../../Users/User';
import ProfileBlockInfoEditReduxForm from './ProfileBlockInfoEdit';
import {savePhoto, saveProfile} from '../../../redux/profile-reducer';
import {useDispatch} from 'react-redux';
import {Divider} from 'antd';

export const ProfileInfo = ({profile, status, isOwner}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onChangePhotoSelected = (e) => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const goToEditMode = () => setEditMode(true)

    const onSubmit = (formData) => {
        dispatch(saveProfile(formData)).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={style.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <img src={profile.photos.large || userPhoto}/>
            <div className={style.description}>
                <div>
                    {isOwner && <input type={'file'} onChange={onChangePhotoSelected}/>}
                </div>
                <ProfileStatus statusText={status} isOwner={isOwner}/>

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
        {isOwner &&
            <button onClick={goToEditMode}>Edit profile</button>
        }
        {profile.fullName && <div>
            <b>Full name:</b> {profile.fullName}
        </div>}

        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Description about a job:</b> {profile.lookingForAJobDescription}
            </div>
        }
        {profile.aboutMe && <div>
            <b>About me:</b> {profile.aboutMe}
        </div>}
        <div>
            <Divider orientation="left">Contacts:</Divider>
            {Object.keys(profile.contacts).map(contact => {
                return <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>
            })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <>
        {contactValue && <div className={style.contact}>{contactTitle}:
            <a href={contactValue} target="_blank"> {contactValue} </a></div>}
    </>

}
import React, {useState} from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {userPhoto} from '../../Users/User';
import ProfileBlockInfoEdit from './ProfileBlockInfoEdit';
import {savePhoto, saveProfile} from '../../../redux/profile-reducer';
import {useDispatch} from 'react-redux';
import {Button, Descriptions, Divider, Image, Input} from 'antd';

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

    const onSubmit = (formData) => dispatch(saveProfile(formData)).then(() => setEditMode(false))

    return (
        <>
            <div style={{
                display: 'flex',
                position: 'relative'
            }}>
                <Image
                    width={250}
                    src={profile.photos.large || userPhoto}
                    style={{borderRadius: "10px"}}
                />
                {isOwner &&
                    <>
                        <label style={{
                            border: '1px solid #ccc',
                            display: 'inline-block',
                            padding: '6px 6px',
                            bottom: '0',
                            background: 'white',
                            left: '0',
                            margin: '10px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            position: 'absolute'
                        }}>
                            <input type="file" style={{display: 'none'}} onChange={onChangePhotoSelected}/>Upload image
                        </label>
                    </>
                }
                <ProfileStatus statusText={status} isOwner={isOwner}/>
            </div>
            {editMode
                ?
                <ProfileBlockInfoEdit profile={profile}
                                      onSubmit={onSubmit}
                                      goToEditMode={goToEditMode}
                />
                :
                <ProfileBlockInfo profile={profile}
                                  isOwner={isOwner}
                                  goToEditMode={goToEditMode}
                />}
        </>
    )
}

const ProfileBlockInfo = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner &&
            <Button onClick={goToEditMode} style={{margin: "10px"}}>Edit profile</Button>
        }
        <Divider orientation="left">User Info:</Divider>

        <Descriptions bordered column={1} labelStyle={{width: '200px'}} size="small" style={{width: '500px'}}>
            {profile.fullName && <Descriptions.Item label="Full name:">{profile.fullName}</Descriptions.Item>}
            <Descriptions.Item label="Looking for a job:">{profile.lookingForAJob ? 'yes' : 'no'}</Descriptions.Item>
            {profile.lookingForAJob && <Descriptions.Item
                label="Description about a job:">{profile.lookingForAJobDescription}</Descriptions.Item>}
            {profile.aboutMe && <Descriptions.Item label="About me:">{profile.aboutMe}</Descriptions.Item>}
        </Descriptions>

        <Divider orientation="left">Contacts:</Divider>
        <ul>
            {Object.keys(profile.contacts).map(contact => {
                return <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>
            })}
        </ul>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <>
        {contactValue &&
            <li style={{fontSize: '18px', fontWeight: '300'}}>{contactTitle}:<a href={contactValue}> {contactValue} </a>
            </li>}
    </>

}
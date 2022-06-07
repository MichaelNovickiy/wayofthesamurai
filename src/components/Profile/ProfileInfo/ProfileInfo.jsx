import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {userPhoto} from "../../Users/User";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}, ...props) => {
    if (!profile) {
        return <Preloader/>
    }
    const onChangePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*{className={`${c.content} ${c.contentColor}` } пример двух классов для дивки!*/}
            <div className={c.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <img src={profile.photos.large || userPhoto}/>
            <div className={c.discription}>
                <div>
                    {isOwner && <input type={'file'} onChange={onChangePhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
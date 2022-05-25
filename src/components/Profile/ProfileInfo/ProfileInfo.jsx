import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*{className={`${c.content} ${c.contentColor}` } пример двух классов для дивки!*/}
            <div className={c.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <img src={profile.photos.large}/>
            <div className={c.discription}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
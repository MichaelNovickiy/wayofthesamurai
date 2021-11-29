import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            {/*{className={`${c.content} ${c.contentColor}` } пример двух классов для дивки!*/}
            <div className={c.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <div >
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}
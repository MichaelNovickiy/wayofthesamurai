import React from "react";
import c from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={c.content}>
            <div className={c.imageBack}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <div className={c.content}>
                <div className={c.imageAva}>
                    <img src="https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
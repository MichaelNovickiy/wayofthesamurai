import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {getStatus, getUserProfile} from '../../redux/profile-reducer';
import {useNavigate, useParams} from 'react-router-dom';

const ProfileContainer = (props) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)
    const authorizedUserId = useSelector(state => state.auth.id)
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        let userId;
        if (params.userId !== undefined) {
            userId = params.userId
        } else {
            userId = authorizedUserId;
            if (!userId) {
                navigate('/login')
            }
        }
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId))

    }, [params.userId])

    return (
        <div>
            <Profile {...props}
                     profile={profile}
                     isOwner={!params.userId}
                     status={status}
            />
        </div>
    )
}
export default ProfileContainer
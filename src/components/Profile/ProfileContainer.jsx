import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {geProfileSelector, getStatus, getUserProfile} from '../../redux/profile-reducer';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {geAuthSelector} from '../../redux/auth-reducer';

const ProfileContainer = () => {
    const {profile, status} = useSelector(state => geProfileSelector(state))
    const {isAuth} = useSelector(state => geAuthSelector(state))
    const authorizedUserId = useSelector(state => geAuthSelector(state).id)
    const dispatch = useDispatch()

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

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <Profile profile={profile}
                     status={status}
                     isOwner={!params.userId}
            />
        </div>
    )
}
export default ProfileContainer
import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {getStatus, getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from '../../utuls/withRouter';

const ProfileContainer = (props) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)
    const authorizedUserId = useSelector(state => state.auth.id)

    useEffect(() => {
        debugger
        let userId;
        if (props.router.params.userId !== undefined) {
            userId = props.router.params.userId
        } else {
            userId = authorizedUserId;
            if (!userId) {
                props.history.push('/login')
            }
        }
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId))

    }, [props.router.params.userId])

    return (
        <div>
            <Profile {...props}
                     profile={profile}
                     isOwner={!props.router.params.userId}
                     status={status}
            />
        </div>
    )
}
export default withRouter(ProfileContainer)
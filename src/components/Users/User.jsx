import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'antd';
import UserWithoutPhoto from '../../assets/images/UserWithoutPhoto.png'

export const userPhoto = UserWithoutPhoto

let User = ({user, followingInProgress, unFollow, follow}) => {
    const {Meta} = Card;

    return <Card
        hoverable
        style={{
            width: 240,
            justifySelf: 'center',
            margin: '20px 0'
        }}
        cover={<Link to={'/profile/' + user.id}>
            <img style={{width: '100%'}}
                 src={user.photos.small != null ? user.photos.large : userPhoto}
                 alt="photo"/>
        </Link>}
    >
        <Meta title={user.name} description={user.status}/>
        <div style={{margin: '10px auto'}}>
            {user.followed ?
                <Button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unFollow(user.id)}>Unfollow</Button>
                :
                <Button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}>Follow</Button>
            }
        </div>
    </Card>

}
export default User
import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, currentPage, onClickPageChangedHandler, users, ...props}) => {

    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
    }

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   currentPage={currentPage}
                   onPageChanged={onClickPageChangedHandler}/>

        <div style={styles}>
            {users.map(m => <User key={m.id}
                                  user={m}
                                  followingInProgress={props.followingInProgress}
                                  unFollow={props.unFollow}
                                  follow={props.follow}

            />)}
        </div>
    </div>
}
export default Users
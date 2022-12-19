import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css'

let Users = ({
                 totalUsersCount,
                 currentPage,
                 onClickPageChangedHandler,
                 users,
                 followingInProgress,
                 unFollow,
                 follow
             }) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   currentPage={currentPage}
                   onPageChanged={onClickPageChangedHandler}/>

        <div className={style.users}>
            {users.map(m => <User key={m.id}
                                  user={m}
                                  followingInProgress={followingInProgress}
                                  unFollow={unFollow}
                                  follow={follow}

            />)}
        </div>
    </div>
}
export default Users
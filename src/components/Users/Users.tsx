import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {usersType} from "../../types/types";

type usersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageChangedHandler: (pageNumber: number) => void
    users: Array<usersType>
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<usersPropsType> = ({
                                      totalUsersCount,
                                      pageSize,
                                      currentPage,
                                      onClickPageChangedHandler,
                                      users,
                                      ...props
                                  }) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onClickPageChangedHandler}/>

        <div>
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
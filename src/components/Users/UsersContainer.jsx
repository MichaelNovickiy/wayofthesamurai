import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./UsersFunctional";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI as getAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true)
        //
        // getAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    };

    onClickPageChangedHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        getAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onClickPageChangedHandler={this.onClickPageChangedHandler}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator
})(UsersContainer);
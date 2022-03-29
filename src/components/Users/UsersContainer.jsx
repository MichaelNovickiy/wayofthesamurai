import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./UsersFunctional";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onClickPageChangedHandler = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default (compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer));
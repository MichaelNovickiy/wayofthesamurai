import React from 'react';
import {connect} from 'react-redux';
import {follow, geUsersSelector, requestUsers, unFollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {compose} from 'redux';
import {getUsersSelector} from '../../redux/users-selectors';

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
                   currentPage={this.props.currentPage}
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
    const {totalUsersCount, currentPage, isFetching, followingInProgress, pageSize} = geUsersSelector(state)
    return {
        totalUsersCount, currentPage, isFetching, followingInProgress,  pageSize,
        users: getUsersSelector(state),
    }
};

export default (compose(
    connect(mapStateToProps, {follow, unFollow, getUsers: requestUsers}))(UsersContainer));
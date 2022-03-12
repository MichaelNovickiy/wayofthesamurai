import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, usersType} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) =>{
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) =>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: usersType) =>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
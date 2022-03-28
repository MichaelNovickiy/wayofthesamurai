import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        messagesPage : state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (messageBody) => {
            dispatch(updateNewMessageBodyAC(messageBody))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer


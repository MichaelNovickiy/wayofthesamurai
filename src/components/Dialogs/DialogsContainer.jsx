import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        messagesPage : state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (messageBody) => {
            dispatch(updateNewMessageBodyAC(messageBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer


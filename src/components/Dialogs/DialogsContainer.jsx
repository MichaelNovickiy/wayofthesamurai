import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messagesPage : state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer


import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messagesPage : state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onMessageChange: (messageBody) => {dispatch(updateNewMessageBodyAC(messageBody))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
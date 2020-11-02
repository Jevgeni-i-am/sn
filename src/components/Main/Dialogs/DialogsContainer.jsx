import React from "react"
import {sendMessageCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapsStateToProps = (state) => {
    return {messagesPage: state.messagesPage}
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

//HOC to connect in Compose

export default compose (
    connect(mapsStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);
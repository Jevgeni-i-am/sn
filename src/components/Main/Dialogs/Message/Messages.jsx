import React from "react";
import css from "./../Dialogs.module.css";

import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../../../redux/store";

const Messages = (state) => {



    let newMessageBody = state.state.newMessageBody;

    let onSendMessageClick = () => {
        state.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        state.store.dispatch(updateNewMessageBodyCreator(body));
    }




    return (
        <div>
            <div className={css.messageGridArea}>
                <div className={css.messageArea1}>

                </div>
                <div className={css.messageArea2}>

                </div>
            </div>

        </div>
    )
}

export default Messages;

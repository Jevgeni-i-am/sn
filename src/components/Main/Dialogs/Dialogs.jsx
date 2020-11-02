import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import css from "./Dialogs.module.css";
import Message from "./Message/Message";
import {AddMessageFormRedux} from "../../common/FormControls/Forms-redux";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let state = props.messagesPage;
    let newMessageBody = state.newMessageBody;

    let dialogItemName = state.dialogs.map(d =>
        <DialogItem id={d.id} name={d.name} key={d.id}/>);

    let messagesElements = state.messages.map(m =>
        <Message id={m.mid} messages={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={css.messageMainPageGridArea}>

            <div>
                {dialogItemName}
            </div>
            <div>
                {messagesElements}
            </div>
            <div className={css.text}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;
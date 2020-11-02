import React from 'react';
import css from "../Dialogs.module.css";


const Message = (props) => {

    return (
        <div className={css.m}>
            <div>
                <span>Сообщение #{props.id}</span>
            </div>
            <div>
                <span> Текст: {props.messages}</span>
            </div>
        </div>
    )

}
export default Message;
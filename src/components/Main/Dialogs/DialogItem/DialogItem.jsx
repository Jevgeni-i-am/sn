import React from "react";
import css from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
//номер ID в линке
    let activeLink = "/dialogs/" + props.id;

    return (

        <div className={css.di} >
            <NavLink to={activeLink}>

                <p>
                    {props.name}
                </p>
            </NavLink>
        </div>


    )
}
export default DialogItem;

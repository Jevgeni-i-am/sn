import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
    return (
        <nav>
            <div className={css.text} >
                <p>website created by
                    <NavLink to="/profile/11831"> Jevgeni </NavLink> </p>
            <p>Under construction.....</p>
            </div>

        </nav>
    )
}

export default Footer;
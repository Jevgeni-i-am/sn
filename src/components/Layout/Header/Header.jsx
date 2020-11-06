import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import sun from "../../../images/sun.png";

const Header = (props) => {
    return (

        <header className={classes.header}>
            <div>
{/*
                <img src={sun} alt=" "> </img>
*/}
            </div>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ?<div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={"/login"}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header;


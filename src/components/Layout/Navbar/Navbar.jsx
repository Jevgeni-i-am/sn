import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import meetup from "../../../images/meetup.png"
import meetup2 from "../../../images/meetup2.png"
import sun from "../../../images/sun.png"

const Navbar = (props) => {

    return (
        /*menu*/
        <nav>
            <div className={css.navbar}>
                <div className={css.menu}>
                    <div>
                        <NavLink to="/login"
                                 activeClassName={css.activeLink}>
                            Sing in
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/profile"
                                 activeClassName={css.activeLink}>
                            Profile
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/dialogs"
                                 activeClassName={css.activeLink}>
                            Message
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/news"
                                 activeClassName={css.activeLink}>
                            News
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/news"
                                 activeClassName={css.activeLink}>
                            Music (not working)
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/settings"
                                 activeClassName={css.activeLink}>
                            Settings
                        </NavLink>
                    </div>
                    <div>
                        __________
                    </div>
                    <div>
                        <NavLink to="/users"
                                 activeClassName={css.activeLink}>
                            Find users
                        </NavLink>
                    </div>
                    <div>
                        __________
                    </div>
                    <div>
                        __________
                    </div>
                </div>


                <div>
                    <img src={meetup} align="top" alt="_"></img>
                    <div><p>Син</p></div>
                </div>
                <div>
                    <div>
                        <img src={meetup2} align="top" alt="_"></img>
                        <div><p>Мох</p></div>
                    </div>
                </div>
                <div>
                    <img src={sun} align="top" alt="_"></img>
                    <div><p>Чуд</p></div>
                </div>

            </div>


        </nav>
    )
}
export default Navbar;

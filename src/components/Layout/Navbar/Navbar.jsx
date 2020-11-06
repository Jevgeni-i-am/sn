import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

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
                        <NavLink to="/users"
                                 activeClassName={css.activeLink}>
                            Find users
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;

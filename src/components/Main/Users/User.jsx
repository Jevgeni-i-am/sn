import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../../assets/images/sun.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, follow, unfollow}) => {

    return <div>
                <span>
                    <div>
                       <NavLink to={"/profile/" + user.id}>
                           <img
                               className={styles.img}
                               src={user.photos.small != null ? user.photos.small : userPhoto}/>

                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}> Unfollow</button>
                            : <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}> Follow</button>}
                    </div>
                </span>

        <span>
                <div>User ID : {user.id}</div>
            </span>
        <span>
                <div>{user.name + "    ++++user.fullName.firstName + ' ' + user.fullName.lastName"}</div>
                <div>{user.status}</div>
            </span>
        <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </span>

    </div>

}


export default User;

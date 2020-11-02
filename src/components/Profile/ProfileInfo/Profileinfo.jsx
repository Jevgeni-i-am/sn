import React from 'react';
import css from "./Profileinfo.module.css";
import banner from "../../../images/beachparty.jpg";
import Preloader from "../../common/Preloaders/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }


    return (


        <div className={css.profileBanner}>
            <img src={banner} alt=" ">
            </img>
            <div className={css.descriptionBlock}>
                <div className={css.profileAva}>
                    <img src={profile.photos.large} alt=" "></img>
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>

    )
}
export default ProfileInfo;
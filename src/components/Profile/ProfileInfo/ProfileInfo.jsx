import React, {useState} from 'react';
import css from "./ProfileInfo.module.css";
import leon from "../../../images/meters300.jpg";
import Preloader from "../../common/Preloaders/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import faceId from "../../../images/faceid.png"
import ProfileDataForm from "./ProfileDataForm.jsx";
import {NavLink} from "react-router-dom";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

//Действие при нажатии кнопки "save"
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(
                () => {
                    setEditMode(false);
                })
    }

    return (
        <div>
            <div className={css.profileBanner}>
                <img src={leon} alt=" "></img>
            </div>
            <div className={css.descriptionBlock}>
                <img src={profile.photos.large || faceId} className={css.profileAva} alt=" "></img>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }}
                                   profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>:{profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return (
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}</b> : {contactValue}</div>
}
export default ProfileInfo;
import React, {useState} from 'react';
import css from "./Profileinfo.module.css";
import banner from "../../../images/beachparty.jpg";
import Preloader from "../../common/Preloaders/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import faceId from "../../../images/faceid.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (


        <div className={css.profileBanner}>
            <img src={banner} alt=" ">
            </img>
            <div className={css.descriptionBlock}>
                <div className={css.profileAva}>
                    <img src={profile.photos.large || faceId} className={css.mainPhoto} alt=" "></img>
                    <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                </div>

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }}
                                   profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
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
const ProfileDataForm = ({profile}) => {
    return <div>
        form
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}</b> : {contactValue}</div>
}
export default ProfileInfo;
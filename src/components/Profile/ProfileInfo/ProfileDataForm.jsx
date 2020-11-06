import React from "react";
import {createField} from "../../common/FormControls/Forms-redux";
import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {reduxForm} from "redux-form";
import css from "./ProfileInfo.module.css";
import cssForm from "../../common/FormControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={cssForm.formSummaryError}>{error}</div>}

        <div><b>Full name</b>:
            {createField("Full name", "fullName", Input, [])}
        </div>

        <div><b>Looking for a job</b>:
            {createField("", "LookingForAJob", Input, [], {type: "checkbox"})}
        </div>


        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", Textarea, [],)}
        </div>

        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", Textarea, [],)}
        </div>


        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return (
                <div key={key} className={css.contact}>
                    <b>{key}:{createField(key, "contacts."+key, Input, [])}</b>

                </div>
            )
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileDataFormReduxForm
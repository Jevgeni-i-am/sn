import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import css from "../../Profile/MyPosts/MyPosts.module.css";
import cssForm from "./FormsControls.module.css";
import React from "react";
import {Input, Textarea} from "./FormsControls";

//Валидатор не срабатывает, если он передан непосредственно в тело Field.
// Необходимо обозначить валидатор в файле, как тут


let maxLengthPost = maxLengthCreator(10);
let maxLengthMsg = maxLengthCreator(20);


//------- PROFILE PAGE -------
const AddNewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea}
                       validate={[required, maxLengthPost]}/>
            </div>
            <div>
                <button className={css.button}> Add post</button>
            </div>
        </form>)
}

//------- LOGIN PAGE -------
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required], "", "Login")}
            {createField("Password", "password", Input, [required], {type: "password"}, "Password")}
            {createField(null, "rememberMe", Input, null, {type: "checkbox"}, "Remember me")}
            {error && <div className={cssForm.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
}

//------- MESSAGE PAGE -------
const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                       placeholder="Enter your message"
                       validate={[required, maxLengthMsg]}/>
            </div>
            <div>
                <button className={css.button}>Send</button>
            </div>
        </form>
    )
}

//Helper - Login Page form
const createField = (placeholder, name, component, validators, props = {}, text = "") => (
    <div> {text} <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/></div>)

//a unique name for the form
export const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export const LoginReduxForm = reduxForm({form: "Login"})(LoginForm)
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

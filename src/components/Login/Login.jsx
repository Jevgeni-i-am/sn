import React from "react";
import "./Login.modeule.css";
import {LoginReduxForm} from "../common/FormControls/Forms-redux";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";




const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1> Autorization page</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps =(state)=>({isAuth:state.auth.isAuth})

export default connect(mapStateToProps, {login})(Login);

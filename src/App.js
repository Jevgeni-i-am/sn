import React from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import RightColumn from "./components/Layout/RightColumn/RightColumn.jsx";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Layout/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloaders/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

/*
next block refactored to: React.lazy
download junk. withSuspense -> Route
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import MusicPageContainer from "./components/Main/Music/MusicPageContainer";
import UsersPageContainer from "./components/Main/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
*/

const DialogsContainer = React.lazy(() => import ('./components/Main/Dialogs/DialogsContainer'));
const MusicPageContainer = React.lazy(() => import ('./components/Main/Music/MusicPageContainer'));
const UsersPageContainer = React.lazy(() => import ('./components/Main/Users/UsersPageContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import ('./components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        //Используем санки из auth-reducer
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/login/'
                           render={withSuspense(LoginPage)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/music'
                           render={withSuspense(MusicPageContainer)}/>
                    <Route path='/users'
                           render={withSuspense(UsersPageContainer)}/>
                </div>
                <RightColumn/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}


export default SamuraiApp;
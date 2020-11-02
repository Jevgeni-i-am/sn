import React from 'react';
import Header from "./Header";
import {logout} from "../../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

//достаёт данные из пропсов
// Data getter from props
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

//функция, возвращающая объект, в котором есть колбэки.
// Каждый колбэк диспатчит что-то в стор
export default connect(mapStateToProps, {logout})(HeaderContainer);


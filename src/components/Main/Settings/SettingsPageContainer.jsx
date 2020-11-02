import React from 'react';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Settings from "./Settings";


class SettingsPageContainer extends React.Component {
    render() {
        return (<Settings {...this.props}/>)
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

//HOC
let AuthRedirectComponent = withAuthRedirect(Settings);

const SettingsPageContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default SettingsPageContainer;





























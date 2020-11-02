import React from 'react';
import {addTrackActionCreator, updateNewTrackActionCreator} from "../../../redux/musicPage-reducer";
import MusicPage from "./MusicPage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


let mapsStateToProps = (state) => {
    return {musicPage: state.musicPage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendTrackClick: () => {
            dispatch(addTrackActionCreator());
        },
        onNewMusicChange: (newSound) => {
            dispatch(updateNewTrackActionCreator(newSound));
        }
    }
}

//HOC
let AuthRedirectComponent = withAuthRedirect(MusicPage);

const MusicPageContainer = connect(mapsStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MusicPageContainer;





























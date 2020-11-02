import React from 'react';
import css from "./Music.module.css";
import MusicBase from "./MB/MusicBase";
import {Redirect} from "react-router-dom";


const MusicPage = (props) => {

    let state = props.musicPage;

    let musicBase =
        state.music.map(m =>
            <MusicBase
                soundid={m.soundid}
                soundgenre={m.soundgenre}
            />)

    let newMusicBody = state.newSoundText;

    let onSendTrackClick = () => {
        props.onSendTrackClick();
    }

    let onNewMusicChange = (e) => {
        let newSound  = e.target.value;
            props.onNewMusicChange(newSound);

    }
    if (!this.props.isAuth) return <Redirect to ={"/login"}/>;

    return (
        <div className={css.genre}>
            {musicBase}
            <div className={css.newGenre}>
                <p className={css.text}>ADD NEW TRACK</p>

                <textarea
                    placeholder="Drop ya bombs here!"
                    onChange={onNewMusicChange}
                    value={newMusicBody}
                />

                <button
                    className={css.button}
                    onClick={onSendTrackClick}>
                    Send track!

                </button>
            </div>
        </div>


    )
}

export default MusicPage;
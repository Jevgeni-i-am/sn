import React from "react";
import css from "./../Music.module.css";


const MusicBase = (props) => {


    return (
        <div className={`${css.navigation} ${css.item}`}>
            <div className={css.soundid}>
                {props.soundid}
            </div>
            <div className={css.genre}>
                {props.soundgenre}
            </div>

        </div>

    )
}
export default MusicBase;

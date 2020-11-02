import React from 'react';
import s from "./RightColumn.module.css";
import img from "../../../images/shaved.png";

const RightColumn = () => {
    return (
        <div className={s.rightColumn}>

            <div>
                <img src={img} width="50" height="50" alt=" "></img>
            </div>

            <div>
                Right bar
            </div>

        </div>


    )
}

export default RightColumn;
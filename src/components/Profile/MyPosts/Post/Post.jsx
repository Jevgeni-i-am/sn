import React from 'react';
import css from "./Post.module.css"

const Post = (props) => {

    return (
        <div className={css.item}>
            <div>
                <div className={css.itembox}>
                    <p>
                        <img
                            src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg"
                            align="top" alt="_"></img>
                    </p>

                    <div><span>Сообщение #</span> {props.id}

                        <div className={css.itembox}>
                            <span> Текст: </span> {props.message}
                        </div>
                        <div>
                            <p>
                                <button><span>Like</span></button>
                                {props.likes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Post;

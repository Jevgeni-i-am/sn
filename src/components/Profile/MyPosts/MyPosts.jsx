import React from 'react';
import css from "./MyPosts.module.css"
import Post from "./Post/Post";
import {AddNewPostFormRedux} from "../../common/FormControls/Forms-redux";


const MyPosts = React.memo(props => {
    let newPostElement = React.createRef();

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p =>
                <Post message={p.post} likes={p.likes} id={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={css.postBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>)
});


export default MyPosts;
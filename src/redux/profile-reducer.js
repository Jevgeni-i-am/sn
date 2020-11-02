import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {postId: 1, post: 'Hi! How are you? :)', likes: 10},
        {postId: 2, post: 'How are you? :)', likes: 20},
        {postId: 3, post: 'Hi! ', likes: 15},
        {postId: 4, post: 'it\'s my first post!', likes: 5}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                postId: 3,
                post: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(
                    p => p.postId != action.postId)
            }
        default:
            return state;
    }


}
//Thunk
//Санка это функция, которая принимает в функцию dispatch
// и может диспатчить различные мелкие Action до/после или вообще без
// асинхронной операции.
// Итоговая цель - задиспатчить Action
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

//Action Creators
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export default profileReducer;
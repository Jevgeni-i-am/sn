/*
import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import musicPageReducer from "./musicPage-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi! How are you? :)', likes: 10},
                {id: 2, post: 'it\'s my first post!', likes: 5},
                {
                    id: 3,
                    post: 'i\'m not kidding you! =) ' +
                        'CSS свойство position — это одно из свойств с помощью' +
                        ' которого можно изменить базовое поведение элементов в ' +
                        'потоке. Другими словами, данное свойство позволяет ' +
                        '«выдернуть» любой элемент из потока документа и разместить ' +
                        'его в другом месте относительно окна браузера или других ' +
                        'элементов на веб-странице.',
                    likes: 51
                },
                {id: 4, post: 'i\'m  kidding you! =)', likes: 1}
            ],
            newPostText: 'Привет :)'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sergei"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Victor"},
                {id: 5, name: "Valera"},
                {id: 6, name: "Nikolai"},
                {id: 7, name: "Andrei"}
            ],
            messages: [
                {mid: 1, message: "Hi"},
                {mid: 2, message: "How is your it-kamasutra?! "},
                {mid: 3, message: "Keep practice, dude!!"},
                {mid: 4, message: "Yo!!!"},
                {mid: 5, message: "Allooooooooha!!!"}
            ],
            newMessageBody: 'write your message here...'
        },
        musicPage: {
            music: [
                {soundid: 1, soundgenre: "Breaks"},
                {soundid: 2, soundgenre: "House"},
                {soundid: 3, soundgenre: "Trance"},
                {soundid: 4, soundgenre: "Pop"},
                {soundid: 5, soundgenre: "Hardfuckingcore"}
            ],
            newSoundText: "Drop ya bombs here! :)"
        },
        sidebar: {
            names: [
                {randomname: "Dimych"},
                {randomname: "Sergei"},
                {randomname: "Sveta"}
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer //publisher-subcriber //addEventListenere //onClick
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.musicPage = musicPageReducer(this._state.musicPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;
//store- OOP*/

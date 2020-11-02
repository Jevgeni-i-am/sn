const ADD_TRACK = 'ADD_TRACK';
const UPDATE_NEW_TRACK_TEXT = 'UPDATE_NEW_TRACK_TEXT';

let initialState = {

    music: [
        {soundid: 1, soundgenre: "Breaks"},
        {soundid: 2, soundgenre: "House"},
        {soundid: 3, soundgenre: "Trance"},
        {soundid: 4, soundgenre: "Pop"},
        {soundid: 5, soundgenre: "Hardfuckingcore"}
    ],
    newSoundText: "Drop ya bombs here! :)"
};

const musicPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TRACK:
            let newSound = state.newSoundText;
            return {
                ...state,
                newSoundText: '',
                music: [...state.music, {soundid: 6, soundgenre: newSound}]
            };

        case
        UPDATE_NEW_TRACK_TEXT:
            return {
                ...state,
                newSoundText: action.newSound
            }

        default:
            return state;
        }
    }

    export const addTrackActionCreator = () => ({type: ADD_TRACK});
    export const updateNewTrackActionCreator = (newSound) =>
        ({type: UPDATE_NEW_TRACK_TEXT, newSound: newSound});

    export default musicPageReducer;
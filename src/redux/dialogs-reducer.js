const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {mid: 7, message: body}]
            };

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;


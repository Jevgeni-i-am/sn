import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,

    //   isFetching: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
//Диспатчим AC
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//Thunk Получаем авторизационные данные.
//После получения данных инициализируем initializedSuccess
export const initializeApp = () => (dispatch) => {
    let promise1 = dispatch(getAuthUserData());
    Promise.all([promise1])
        .then(() => {
        dispatch(initializedSuccess());
    });
}


export default appReducer;


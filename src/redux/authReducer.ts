import {ActionsTypes} from "./redux-store";

//типизация state/initialState
// export type AuthDataType ={
//     data: {
//         id: number | null,
//         login: string | null,
//         email: string | null
//     },
//     messages: [string] | [],
//     resultCode: 0 | 1
// }
export type HeaderReducerType = {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    messages: [string] | []
    resultCode: 0 | 1
    isFetchHead: boolean
    isAuth: boolean
    photo: string | null
}

//типизация ActionCreators
export type setAuthorizationType = {
    type: "SET_AUTHORIZATION"
    data:  HeaderReducerType

}
export type setToggleFetchHeaderType = {
    type: 'SET_TOGGLE_HEADER'
    isFetchHeader: boolean
}
export type setPhotoType = {
    type: 'SET_PHOTO'
    photo: string | null
}
//case:
const SET_AUTHORIZATION = "SET_AUTHORIZATION"
const SET_FETCH_HEADER = 'SET_TOGGLE_HEADER'
const SET_PHOTO = 'SET_PHOTO'
//ActionCreators
export const setAuthUserData = (data: HeaderReducerType): setAuthorizationType => ({type: SET_AUTHORIZATION,data})
export const setToggleFetchAuth  = (isFetchHeader: boolean): setToggleFetchHeaderType => ({type: SET_FETCH_HEADER, isFetchHeader})
export const setPhoto = (photo: string | null): setPhotoType => ({type: SET_PHOTO,  photo})

let initialState: HeaderReducerType = {
    data: {
        id: null,
        login: null,
        email: null
    },
    messages: [],
    resultCode: 1,
    isFetchHead: true,
    isAuth: false,
    photo: null
}


const authReducer = (state: HeaderReducerType  = initialState, action: ActionsTypes): HeaderReducerType  => {

    switch (action.type) {
        case SET_AUTHORIZATION: {

            //придумать что-то перед ответом из сервака ! ! !

            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_FETCH_HEADER: {
            return {
                ...state, isFetchHead: action.isFetchHeader
            }
        }
        case SET_PHOTO: {
            return {
                ...state, photo: action.photo
            }
        }
        default:
            return state
    }
}

export default authReducer;
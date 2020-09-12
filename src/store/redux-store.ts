import {createStore, combineReducers, applyMiddleware} from "redux"
import profileReducer, {UserProfileType} from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer, { UsersReducerType } from "./usersReducer";
import authReducer, {HeaderReducerType} from "./authReducer";
import thunkMiddleware from "redux-thunk"

//типизация АС
export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type ChangeNewMessActionType = {
    type: "CHANGE-NEW-MESS-TEXT"
    newMessText: string
}
export type AddMessActionType = {
    type: "ADD-MESS"
    //mess: string
}
export type FollowUser = {
    type: "FOLLOW"
    userID: number
}
export type UnfollowUser = {
    type: "UNFOLLOW"
    userID: number
}
export type SetUsers = {
    type: "SET_USERS"
    items: Array<UsersReducerType>
}
export type SetCurrentPage = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type SetTotalCount = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}
export type ToggleFetchingType = {
    type: 'TOGGLE_FETCHING'
    isFetch: boolean
}
export type setUserProfileType = {
    type: 'SET_PROFILE'
    profile: UserProfileType
}
type setToggleFetchProfile = {
    type: 'TOGGLE_FETCHING_PROFILE'
    isFetch: boolean
}
type setAuthorization = {
    type: 'SET_AUTHORIZATION'
    data: HeaderReducerType
}
type setToggleFetchHeader = {
    type: 'SET_TOGGLE_HEADER'
    isFetchHeader: boolean
}
type SetPhoto = {
    type: 'SET_PHOTO'
    photo: string | null
}
export type setFollowingType = {
    type: 'SET_TOGGLE_FOLLOWING'
    userID: number
    isFetch: boolean
}
export type changeStatusTextType = {
    type: 'CHANGE_STATUS_TEXT',
    newText: string
}
export type addStatusTextType = {
    type: 'ADD_STATUS_TEXT'
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType |
    ChangeNewMessActionType | AddMessActionType | FollowUser |
    UnfollowUser | SetUsers | SetCurrentPage | SetTotalCount |
    ToggleFetchingType | setUserProfileType | setToggleFetchProfile |
    setAuthorization | setToggleFetchHeader | SetPhoto | setFollowingType |
    changeStatusTextType | addStatusTextType

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    user: usersReducer,
    auth: authReducer
})
let store = createStore( reducers, applyMiddleware(thunkMiddleware))
//type State
export type ReduxStateType = ReturnType<typeof reducers>
export type ReduxStore = typeof store
export type DispatchType = typeof store.dispatch

export default store;

// @ts-ignore
window.store = store
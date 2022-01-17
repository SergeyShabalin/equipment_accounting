import {combineReducers} from 'redux'
import modalReducer from "./modal";
import AuthReducer from "./AuthReducer";


export default combineReducers({
    modal: modalReducer,
    AuthReducer: AuthReducer
})
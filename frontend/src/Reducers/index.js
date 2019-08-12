import { combineReducers } from "redux";
import auth from './Auth/authReducer';
import comments from './Commments/Comments'

export default combineReducers ({
    auth,
    comments
})
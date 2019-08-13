import { combineReducers } from "redux";
import auth from './Auth/authReducer';
import comments from './Commments/Comments';
import Snackbar from './Snackbar/Snackbar';

export default combineReducers ({
    auth,
    comments,
    Snackbar
})
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setTokenToHeader from '../../Utils/setTokenToHeader';
import { IP } from './../../IPConfFrontend';
import { snackbarAction } from "../Snackbar/snackbar";

export const setCurrentUser = decoded  =>{
 return {
   type:"SET_CURRENT_USER",
   payload: decoded
 }
}

export const login =  (data) => async dispatch => {
    try {
        const res = await axios.post(`${IP}/api/v1/auth/login`, data)
        if (res.data.token) {
            const { token } = res.data;
            //set token to local storage
            localStorage.setItem('token', token);
            //set token to Auth Header
            setTokenToHeader(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            //set Current User
            dispatch(snackbarAction({type:'success', message:"Authentication successful"}))
            dispatch(setCurrentUser(decoded));
            return res;
        } else {
            throw new Error("token not found");
        }
    } catch (error) {
        dispatch(snackbarAction({type:'error', message:"incorrect email or password"}))
        console.error(error);
        //needs to be handled
    }
};

export const signup = async(data) => {
    try {
        const res = await axios.post(`${IP}/api/v1/auth/signup`, data);
        if(res){
            return true;
        } else {
            throw new Error("no response");
        }
    } catch (error) {
        console.error(error);
        return false;
        //needs to be handled
    }
}

export const logout = () => dispatch =>{
  localStorage.removeItem('token');
  setTokenToHeader();   //removes the token from the axios header
  dispatch(setCurrentUser({}))
}
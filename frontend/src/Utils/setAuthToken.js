import { setCurrentUser } from '../Actions/Auth/authActions';
import jwt_decode from 'jwt-decode';
import setTokenToHeader from './setTokenToHeader';

const  setAuthToken = (store) =>{
    if (localStorage.token) {
        const decode = jwt_decode(localStorage.token);
        //set token to axios header
        store.dispatch(setCurrentUser(decode));
        setTokenToHeader(localStorage.token);
    }
}

export default setAuthToken;
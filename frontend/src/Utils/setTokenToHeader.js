import axios from 'axios';

const setTokenToHeader = (token) => {
    if (token) {
        //Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //Delete Auth Heder
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setTokenToHeader;
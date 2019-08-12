const authReducer = (auth={}, action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return action.payload;
        default:
            return auth
    }
}

export default authReducer;
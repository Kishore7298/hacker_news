
const Snackbar = (state={}, action) => {
    switch(action.type){
        case 'SNACKBAR':
            return action.payload;
            break;
        default:
            return state
    }
}

export default Snackbar
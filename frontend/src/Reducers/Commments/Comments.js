/*
    let formatDocument = {
        "_id":objectId,
        "userId":"",
        "userName":"",
        "Message":"",
        "lastUpdatedTime":"",
        "list":["_id"] 
    } 
    the list contains the _id of the reply comments
*/
let initialState = {
    comments: []
}

const comments = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_STATUS':
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case 'REPLY':
            //needs to be handled
        case 'EDIT':
            //needs to be handled
        default: 
            return state;
    }
}

export default comments;
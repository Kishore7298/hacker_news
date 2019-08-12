/*
    let formatDocument = {
        "_id":objectId,
        "userId":"",
        "userName":"",
        "message":"",
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
            break;
        case 'REPLY':
            let { _id, object } = action.payload;
            let newId = object._id;
            const index = state.comments.findIndex(post => post._id === _id);
            return {
                ...state,
                comments:[
                    ...state.comments.slice(0, index),
                    {
                        ...state.comments[index],
                        list:[
                            ...state.comments[index].list,
                            newId
                        ]
                    },
                    ...state.comments.slice(index + 1),
                    object
                ]
            }
            break;
        case 'EDIT':
            let { id, message } = action.payload;
            const i = state.comments.findIndex(post => post._id === id);
            return {
                ...state,
                comments:[
                    ...state.comments.slice(0, i),
                    {
                        ...state.comments[i],
                        lastUpdatedTime: new Date().getTime(),
                        message,
                    },
                    ...state.comments.slice(i + 1)
                ]
            }
            break;
        default: 
            return state;
    }
}

export default comments;
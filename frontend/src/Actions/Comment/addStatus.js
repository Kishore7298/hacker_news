const ObjectId = require('mongodb').ObjectID;

const addStatus = object => dispatch => {
    let _id = ObjectId().toHexString();
    object._id = _id;
    object.lastUpdatedTime = new Date().getTime();
    object.list = [];
    dispatch({
        type: 'ADD_STATUS',
        payload: object
    })
}

export {
    addStatus
}
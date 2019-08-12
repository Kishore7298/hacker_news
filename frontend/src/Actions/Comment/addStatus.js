const ObjectId = require('mongodb').ObjectID;

const _addAttributes = (object) => {
    let _id = ObjectId().toHexString();
    object._id = _id;
    object.lastUpdatedTime = new Date().getTime();
    object.list = [];
}

const addStatus = object => dispatch => {
    _addAttributes(object);
    dispatch({
        type: 'ADD_STATUS',
        payload: object
    })
}

const updateStatus = object => dispatch => {
    dispatch({
        type:'EDIT',
        payload: object
    })
}

const replyStatus = (id,object) => dispatch => {
    _addAttributes(object);
    dispatch({
        type:'REPLY',
        payload:{
            _id:id,
            object
        }
    })
}

export {
    addStatus,
    updateStatus,
    replyStatus
}
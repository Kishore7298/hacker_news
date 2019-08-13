import axios from 'axios';
import { IP } from "../../IPConfFrontend";
import { snackbarAction } from "../Snackbar/snackbar";
const ObjectId = require('mongodb').ObjectID;


const _addAttributes = (object) => {
    let _id = ObjectId().toHexString();
    object._id = _id;
    object.lastUpdatedTime = new Date().getTime();
    object.list = [];
}

const addStatusAction = (object) => {
    return {
        type: 'ADD_STATUS',
        payload: object
    }
}

const initialFetchAction = (object) => {
    return {
        type:'INITIAL_FETCH',
        payload:object
    }
}

const editAction = (object) => {
    return {
        type:'EDIT',
        payload: object
    }
}

const replyAction = (id, object) => {
    return {
        type:'REPLY',
        payload:{
            _id:id,
            object
        }
    }
}

const addStatus = object => async(dispatch) => {
    _addAttributes(object);
    try {
        let response = await axios.post(`${IP}/api/v1/comment/`, object);
        if(response){
            dispatch(addStatusAction(object));
        } else {
            throw new Error("response not found");
        }
    } catch (error) {
        console.error(error);
        dispatch(snackbarAction({type:"error", message:"error adding the comment"}))
    }
    
}

const updateStatus = object => async(dispatch) => {
    try {
        let response = await axios({
            method:"put",
            url:`${ IP }/api/v1/comment`,
            params: {
                id: object.id
            },
            data: {
                updateObj: {
                    message: object.message
                }
            }
        })
        dispatch(editAction(object))
    } catch(error) {
        dispatch(snackbarAction({type:"error", message:"error updating the comment"}))
    }
}

const replyStatus = (id,object) => async (dispatch) => {
    _addAttributes(object);
    try {
        let updateResponse = await axios({
            method:"put",
            url:`${ IP }/api/v1/comment/updatelist`,
            params: {
                id,
            },
            data:{
                newId: object._id
            }
        });
        let response = await axios.post(`${IP}/api/v1/comment/`, object);
        dispatch(replyAction(id, object));
    } catch (error) {
        console.error(error);
        dispatch(snackbarAction({type:"error", message:"error replying"}))
    }
}

const initialFetch = () => async (dispatch) => {
    try {
        let response = await axios.get(`${IP}/api/v1/comment`);
        dispatch(initialFetchAction(response.data));
    } catch (error) {
        dispatch(snackbarAction({type:"error", message:"error fetching the comments"}));
    }
}

export {
    addStatus,
    updateStatus,
    replyStatus,
    initialFetch
}
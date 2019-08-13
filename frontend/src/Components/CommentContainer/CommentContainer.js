import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { createSelector } from "reselect";

import StatusBar from './Statusbar/Statusbar';
import CommentList from './CommentList/CommentList';
import { initialFetch } from "../../Actions/Comment/addStatus";

let statusSelect = createSelector(
    state => {
        if(state.comments && state.comments.comments){
            return state.comments.comments;
        } else {
            return [];
        }
    },
    comments => {
        return comments.filter(comment => comment.status === true);
    },
)

const CommentContainer = (props)=>{
    let [userInfo, setUserInfo] = useState("")
    const auth = useSelector(state => state.auth);

    const statuses = useSelector(statusSelect);

    useEffect(()=>{
        setUserInfo(auth)
    },[auth._id])
    
    useEffect(()=>{
        if(!statuses.length) {
            //call the action to fetch the comments list.
            props.initialFetch();
        }

    },[])

    if(auth._id) {
        return (
            <div className="d-flex justify-content-center align-items-center mt-4 flex-column">
                <StatusBar userInfo={userInfo} />
                <CommentList userInfo={userInfo} statuses={statuses}/>
            </div>
        )
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mt-5" >
               <h3>
                    Please login to continue...
               </h3>
            </div>
        </div>
    )
}

export default connect(null,{initialFetch})(CommentContainer);
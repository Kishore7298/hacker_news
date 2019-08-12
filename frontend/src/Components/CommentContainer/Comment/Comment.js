import React, { useState  } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Avatar, IconButton} from "@material-ui/core";
import { Edit, Reply } from "@material-ui/icons";

import './Comment.css';
import EditInput from '../EditInput/EditInput';

const Comment = (props) => {
    let [mode, setMode] = useState("");

    let { _id, userName, message, lastUpdatedTime, list } = props.comment;
    let { setReplyModal, replyModal } = props;

    let comments = useSelector(state => state.comments );

    const renderNestedComment = () => {
        let commments = comments.comments

        if(list.length === 0){
            return null;
        } else {
            return list.map((comment)=>{
                let selectedComment = commments.filter((item)=>item._id === comment);
                selectedComment = selectedComment[0];
                return (
                    <Comment comment={selectedComment} replyModal={replyModal} setReplyModal={setReplyModal} />
                )
            })
        }
        
    }
    
    
    console.log(props);
    const renderCommentBody = () => {
        if(mode === "") {
            return (
                <>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {message}
                    </Typography>
                    <div className="comment-buttons">
                        <IconButton onClick={()=>{setMode("edit")}}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={()=>{setReplyModal(_id)}}>
                            <Reply />
                        </IconButton>
                    </div>
                </>
            )
        } else {
           return (
            <EditInput mode={mode} id={_id} message={message} setMode={setMode}/>
           )
        }
        
    }

    const getTime = (timestamp)=>{
        let time = new Date(parseInt(timestamp));
        return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    }

    return (
        <div className="comment-container mt-2">
            <div className="comment-head">
                <Avatar>
                    {userName[0]}
                </Avatar>
            </div>
            <div className="comment-body pl-3">
                <div className="comment-name-date">
                    <div className="comment-name">
                        <Typography variant="h6">
                            {userName}
                        </Typography>
                    </div>
                    <div className="comment-date mt-1 ml-2">
                        <Typography variant="button"  color="textSecondary" component="p">
                            {getTime(lastUpdatedTime)}
                        </Typography>
                    </div>
                </div>
                <div className="comment-message">
                    {renderCommentBody()}
                    {renderNestedComment()}
                </div>
            </div>
        </div>
    )
}

export default Comment
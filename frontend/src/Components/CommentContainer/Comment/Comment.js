import React from 'react';
import { Typography, Avatar, IconButton } from "@material-ui/core";
import { Edit, Reply } from "@material-ui/icons";

import './Comment.css';

const Comment = (props) => {

    const renderNestedComment = () => {
        if(props.repeat === "true"){
            return (
                <Comment repeat="false" />
            )
        }
    }

    const getTime = (timestamp)=>{
        let time = new Date(parseInt(timestamp));
        return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    }

    let { userName, message, lastUpdatedTime } = props.comment;

    return (
        <div className="comment-container mt-4">
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
                    <Typography variant="body2" color="textSecondary" component="p">
                        {message}
                    </Typography>
                    <div className="comment-buttons">
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <IconButton>
                            <Reply />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
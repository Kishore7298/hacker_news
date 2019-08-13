import React, { useState  } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Comment from '../Comment/Comment';
import ReplyModal from '../ReplyModal/ReplyModal';

const useStyles = makeStyles(theme => ({
    root:{
        padding: theme.spacing(3, 2),
        minHeight:"700px"
    },
    containerDiv :{
        width:"70%",
        minWidth:"300px",
        minHeight:"700px"
    }
}))

const CommentList = (props) => {
    let [ replyModal, setReplyModal ] = useState("")
    const renderComments = () => {
        return props.statuses.map((comment)=>{
            return <Comment comment={comment} replyModal={replyModal} setReplyModal={setReplyModal} userInfo={props.userInfo}/>
        })

    }
    const classes = useStyles();
    return (
        <div className={`${classes.containerDiv} mt-4`}>
            <Paper className={classes.root}>
                <Typography variant="h5">
                    Comments:
                </Typography>
                {renderComments()}
            </Paper>
            <ReplyModal replyModal={replyModal} setReplyModal={setReplyModal} userInfo={props.userInfo}/>
        </div>
    )
}

export default CommentList;
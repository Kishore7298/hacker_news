import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Comment from '../Comment/Comment';

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
    
    const renderComments = () => {
        return props.statuses.map((comment)=>{
            return <Comment comment={comment}/>
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

        </div>
    )
}

export default CommentList;
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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

const CommentList = () => {
    const classes = useStyles();
    return (
        <div className={`${classes.containerDiv} mt-4`}>
            <Paper className={classes.root}>
                <Typography variant="h6">
                    Comments:
                </Typography>
                <div class="media">
                        <img class="mr-3" src="..." alt="" />
                        <div class="media-body">
                            <h5 class="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                            <div class="media mt-3">
                            <a class="pr-3" href="#">
                                <img src="..." alt="" />
                            </a>
                            <div class="media-body">
                                <h5 class="mt-0">Media heading</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
            </Paper>
        </div>
    )
}

export default CommentList;
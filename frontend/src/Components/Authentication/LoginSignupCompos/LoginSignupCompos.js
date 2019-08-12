import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Typography, Paper } from "@material-ui/core";
import userNameSelector from '../../../Utils/userNameSelector';

import useStyles from './styles';

const Login = (props)=>{
    const classes = useStyles();

    let userNameSelect = useSelector(userNameSelector);

    useEffect(()=>{
        if(userNameSelect){
            props.history.push('/');
        } else {
            //do nothing!
        }
    },[userNameSelect])

    return (
        <div className={`${classes.top}`}>
            <Paper className={`${classes.root} mt-5`}>
                <Typography variant="h5" component="h3" className={classes.typo}>
                    {props.title}
                </Typography>
                { props.children }
            </Paper>
        </div>
    )
}

export default withRouter(Login);
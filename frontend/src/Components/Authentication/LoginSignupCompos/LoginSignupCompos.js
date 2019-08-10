import React from 'react';
import { Typography, Paper } from "@material-ui/core";

import useStyles from './styles';

const Login = (props)=>{
    const classes = useStyles();

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

export default Login;
import React from 'react';
import { Typography, Paper, TextField, Button } from "@material-ui/core";

import useStyles from './loginStyle';

const Login = ()=>{
    const classes = useStyles();

    return (
        <div style={{height:"100vh", width:"100%"}} className={`${classes.top}`}>
            <Paper className={`${classes.root} mt-5`}>
                <Typography variant="h5" component="h3" className={classes.typo}>
                    Login to comment system
                </Typography>
                <div className="d-flex flex-column mt-4 ">
                    <TextField
                        id="outlined-name"
                        label="email"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" className={`${classes.button} mt-3 align-self-center`}>
                        Submit
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default Login;
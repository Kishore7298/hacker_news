import React from 'react';

import { TextField, Button } from "@material-ui/core";
import useStyles from '../LoginSignupCompos/styles';

const SignupPart = (props) => {
    const classes = useStyles();

    return (
        <div className="d-flex flex-column mt-4 ">
           
           <TextField
                id="outlined-name"
                label="Username"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
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
                type="password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="primary" className={`${classes.button} mt-3 align-self-center`}>
                Signup
            </Button>
        </div>
    )
}

export default SignupPart;
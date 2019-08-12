import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import useStyles from '../LoginSignupCompos/styles';
import { withRouter } from "react-router";

import { signup  } from "../../../Actions/Auth/authActions";

const SignupPart = (props) => {
    const classes = useStyles();

    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const onsubmit = async() => {
        let result = await signup({userName, email, password});
        if(result){
            props.history.push('/login');
        }
    }

    return (
        <div className="d-flex flex-column mt-4 ">
           <TextField   //needs to be abstracted out!!
                id="outlined-name"
                label="Username"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={userName}
                onChange={e => setUserName(e.target.value)} 
            />
            <TextField
                id="outlined-name"
                label="email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                id="outlined-name"
                label="password"
                type="password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" className={`${classes.button} mt-3 align-self-center`} onClick={onsubmit}>
                Signup
            </Button>
        </div>
    )
}

export default withRouter(SignupPart);
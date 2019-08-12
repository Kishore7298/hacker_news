import React, { useState, useEffect } from 'react';
import { TextField, Button } from "@material-ui/core";
import useStyles from '../LoginSignupCompos/styles';
import { connect } from "react-redux";

import { login } from '../../../Actions/Auth/authActions';

const Login = (props)=>{
    const classes = useStyles();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const onSubmit = ()=>{
        let document = {
            email,
            password
        }
        props.login(document);
    }

    return (
        <div className="d-flex flex-column mt-4 ">
            <TextField  //need to be abstracted out
                id="outlined-name"
                label="email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                error={false}
                value={email}
                onChange={e=>setEmail(e.target.value)}
            />
            <TextField
                id="outlined-name"
                label="password"
                type="password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" className={`${classes.button} mt-3 align-self-center`} onClick={onSubmit}>
                Submit
            </Button>
        </div>
    )
}

export default connect(null, {login})(Login);
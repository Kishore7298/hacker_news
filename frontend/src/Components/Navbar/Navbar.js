import React, { useEffect, useState } from 'react';
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import userNameSelector from '../../Utils/userNameSelector';
import { logout } from "../../Actions/Auth/authActions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  links:{
    textDecoration:"none"
  }
}));

const Navbar = (props)=>{
  const classes = useStyles();
  let [userName, setUserName] = useState("");

  let userNameSelect = useSelector(userNameSelector);

  useEffect(()=>{
    setUserName(userNameSelect);
  },[userNameSelect])

  const renderButtons = ()=>{
    if(userName){
      return (
          <Button color="inherit" onClick={()=>{props.logout(); window.location='/'}}>
              logout
          </Button>
      )
    } else {
      return (
        <>
          <Link to='/signup' className="m-1">
              <Button color="inherit">
                  Sign up
              </Button>
          </Link>
          <Link to='/login' className="m-1">
              <Button color="inherit">
                  Login
              </Button>
          </Link>
        </>
      )
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Link to="/" className={classes.links}>
                    Comment System
                </Link>            
            </Typography>
          { renderButtons() }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(null,{logout})(Navbar);
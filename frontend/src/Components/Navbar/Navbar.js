import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

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

const Navbar = ()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Link to="/" className={classes.links}>
                    Comment System
                </Link>            
            </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
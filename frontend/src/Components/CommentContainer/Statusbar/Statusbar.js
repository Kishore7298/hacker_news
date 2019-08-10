import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "50%",
      minWidth:"300px"
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
});


const Statusbar = ()=>{

    const classes = useStyles();
    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Add your status here"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider className={classes.divider} />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <SendIcon />
        </IconButton>
      </Paper>
    );
}

export default Statusbar;
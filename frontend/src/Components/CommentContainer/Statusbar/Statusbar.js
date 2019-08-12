import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { addStatus } from "../../../Actions/Comment/addStatus";

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


const Statusbar = (props)=>{

  const classes = useStyles();

  let [ status, setStatus ] = useState("");

  const submitStatus = () => {
    let document = {
      userName: props.userInfo['user_name'],
      userId: props.userInfo['_id'],
      message: status,
      status: true
    } 
    props.addStatus(document);
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Add your status here"
        inputProps={{ 'aria-label': 'add your status here' }}
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={submitStatus}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}

export default connect(null,{ addStatus })(Statusbar);
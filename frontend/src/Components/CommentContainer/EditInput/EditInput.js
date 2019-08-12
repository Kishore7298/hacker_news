import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Modal, Input, Typography, Button } from '@material-ui/core';

import { updateStatus } from "../../../Actions/Comment/addStatus";

const EditReplyModal = (props) => {
    let [ value, setValue ] = useState("");

    let { setMode, updateStatus, id, message } = props;

    useEffect(()=>{
        setValue(message);
    },[message])

    return (
        <div>
            <Input
                placeholder="Enter your text here"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            >
            </Input>
            <Button onClick={()=>{updateStatus({id, message:value});  setMode("")}}>
                Submit
            </Button>
            <Button onClick={()=>{setMode("")}}>
                Close
            </Button>
        </div>
    )
}

export default connect(null,{updateStatus})(EditReplyModal);
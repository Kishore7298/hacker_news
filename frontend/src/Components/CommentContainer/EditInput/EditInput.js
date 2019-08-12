import React, { useState, useEffect } from 'react';
import { Modal, Input, Typography, Button } from '@material-ui/core'

const EditReplyModal = (props) => {
    let [ value, setValue ] = useState("");

    useEffect(()=>{
        setValue(props.message);
    },[props.message])

    return (
        <div>
            <Input
                placeholder="Enter your text here"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            >
            </Input>
            <Button onClick={()=>{props.setMode("")}}>
                Submit
            </Button>
        </div>
    )
}

export default EditReplyModal;
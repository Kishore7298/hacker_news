import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { replyStatus } from "../../../Actions/Comment/addStatus";

const ReplyModal = (props)=>{

    let [value, setValue] = useState("");
    let { replyModal, setReplyModal, userInfo } = props;

    const onSubmit = () => { 
        let { _id, user_name } = userInfo;
        let document = {
            userId: _id,
            userName:user_name,
            message:value
        }
        props.replyStatus(replyModal, document);

    }

    return (
        <div>
            <Dialog
                open={(replyModal)?true:false}
                fullWidth={true}
                onClose={()=>{setReplyModal("")}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Reply"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Input 
                        placeholder="write your reply here"
                        style={{width:"100%"}}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  color="primary" onClick={()=>{onSubmit(); setReplyModal("") }}>
                    Submit
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
}

export default connect(null, { replyStatus })(ReplyModal);
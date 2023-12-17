import React, {FC, useState} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DatePicker, {DateObject} from "react-multi-date-picker";

interface props {
    open: boolean;
    handleClose: () => void;
}

const BookDialog: FC<props> = ({open, handleClose}) => {
    const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <DatePicker multiple value={value} onChange={setValue} />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BookDialog;

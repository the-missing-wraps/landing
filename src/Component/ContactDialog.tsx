import React, {FC} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";

interface props {
    open: boolean;
    handleClose: () => void;
}

const ContactDialog: FC<props> = ({open, handleClose}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Contact Us</DialogTitle>
            <form onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText>
                    Want to know more about our services? Please leave your contact here.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="surname"
                    label="Surname"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="company"
                    label="Company"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
            </form>
        </Dialog>
    );
}

export default ContactDialog;

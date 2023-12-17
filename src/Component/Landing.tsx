import React from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';
import Service from "./Service"
import BookDialog from "./BookDialog";
import ContactDialog from "./ContactDialog";

const Landing = () => {
    const [openBook, setOpenBook] = React.useState(false);
    const [openContact, setOpenContact] = React.useState(false);

    const handleClickOpen = () => {
        setOpenBook(true);
    };

    const handleCloseBook = () => {
        setOpenBook(false);
    };

    const handleCloseContact = () => {
        setOpenContact(false);
    };

    return (
        <>
            <div className="header">
                <div className="logo"></div>
                <div className="buttons-top">
                    <div className="btn">
                        <Button id="book" variant="outlined" onClick={() => setOpenBook(true)}>Book a Test</Button>
                    </div>
                    <div className="btn">
                        <Button id="contact" variant="contained" onClick={() => setOpenContact(true)}>Contact Sales</Button>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="info-container">
                    <div className="info">
                    </div>
                </div>
            </div>
            <div id="page2">
                <div className="content">
                    <h1 className="title">Services</h1>
                    <div className="services">
                        <Service image="talk.png" title="Tech Consulting" text="We support you with our expertise in autonomous driving testing."/>
                        <Service image="driving-school.png" title="Testing" text="We offer testing environment covering customized use cases to ensure VRU testing."/>
                        <Service image="vital-signs.png" title="Simulation Center" text="With fully-equipped simulation center, you save time and cost before sending your vehicles on road."/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="buttons-bottom">
                        <div className="btn">
                            <Button id="book" variant="outlined">Book a Test</Button>
                        </div>
                        <div className="btn">
                            <Button id="contact" variant="contained">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </div>
            <BookDialog open={openBook} handleClose={handleCloseBook}/>
            <ContactDialog open={openContact} handleClose={handleCloseContact}/>
            {/*<div><a href="https://www.flaticon.com/free-icons/consulting" title="consulting icons">Consulting icons created by muh zakaria - Flaticon</a></div>*/}
        </>
    );
}

export default Landing;

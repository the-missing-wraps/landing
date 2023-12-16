import React from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';

const Landing = () => {
    return (
        <>
            <div className="header">
                <div className="logo"></div>
            </div>
            <div className="banner">
                <div className="info">
                    <div className="buttons">
                        <Button variant="contained">Book a Test</Button>
                        <br/>
                        <Button variant="contained">Contact Sales</Button>
                    </div>
                </div>
            </div>
            <div className="services"></div>
        </>
    );
}

export default Landing;

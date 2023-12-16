import React from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';
import Service from "./Service"

const Landing = () => {
    return (
        <>
            <div className="header">
                <div className="logo"></div>
            </div>
            <div className="banner">
                <div className="info-container">
                    <div className="info">
                        <div className="buttons">
                            <Button variant="contained">Book a Test</Button>
                            <br/>
                            <Button variant="contained">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <Service image="talk.png" text="Technology Consulting"/>
                <Service image="driving-school.png" text="Testing"/>
                <Service image="vital-signs.png" text="Simulation Center"/>
            </div>
            {/*<div><a href="https://www.flaticon.com/free-icons/consulting" title="consulting icons">Consulting icons created by muh zakaria - Flaticon</a></div>*/}
        </>
    );
}

export default Landing;

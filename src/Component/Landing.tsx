import React from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';
import Service from "./Service"

const Landing = () => {
    return (
        <>
            <div className="header">
                <div className="logo"></div>
                <div className="buttons">
                    <div className="btn">
                        <Button id="book" variant="outlined">Book a Test</Button>
                    </div>
                    <div className="btn">
                        <Button id="contact" variant="contained">Contact Sales</Button>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="info-container">
                    <div className="info">
                        {/*<div className="buttons">*/}
                        {/*    <Button style={{"border": "1px solid lightgreen","backgroundColor": "black", "color":"lightgreen"}} variant="outlined">Book a Test</Button>*/}
                        {/*    <Button style={{"border": "1px solid lightgreen","backgroundColor": "black", "color":"lightgreen"}} variant="contained">Contact Sales</Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="services">
                <Service image="talk.png" text="Tech Consulting"/>
                <Service image="driving-school.png" text="Testing"/>
                <Service image="vital-signs.png" text="Simulation Center"/>
            </div>
            {/*<div><a href="https://www.flaticon.com/free-icons/consulting" title="consulting icons">Consulting icons created by muh zakaria - Flaticon</a></div>*/}
        </>
    );
}

export default Landing;

import React from "react";
import hollywoodHills from "../images/bg/Hollywood-Sign.png";
import stars from "../images/bg/Stars.svg"
import mapsIcon from "../images/ui/mapsIcon.png";
import "./Footer.css"

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="position-container">
                <img className="stars" src={stars} alt="starry Night"/>
                <img className="hollywood" src={hollywoodHills} alt="Hollywood Hills at Night"/>
                <div className="footer-bottom">
                <div className="footer-text">
                    <h4><strong>JOIN US</strong></h4>
                    <p>6925 Hollywood Blvd, Hollywood, CA 90028</p>
                    <p>7:00PM - Saturday February 16th, 2019</p>
                </div>
                <a href="https://www.google.com/maps/place/TCL+Chinese+Theatre/@34.0937851,-118.3439877,14z/data=!3m1!5s0x80c2bf23c7952b9f:0x64dca853c2a04780!4m13!1m7!3m6!1s0x80c2bf07045279bf:0xf67a9a6797bdfae4!2sHollywood,+Los+Angeles,+CA!3b1!8m2!3d34.0928092!4d-118.3286614!3m4!1s0x80dcd7da01c280c3:0xf73982db60c65ffb!8m2!3d34.1020239!4d-118.3409715"><img src={mapsIcon} alt="google maps icon"/></a>
                </div>

            </div>
        </div>
    )
}

export default Footer;
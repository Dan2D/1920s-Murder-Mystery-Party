import React from "react";
import hollywoodHills from "../images/bg/Hollywood-Sign.svg";
import stars from "../images/bg/Stars.svg"
import "./Footer.css"

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="position-container">
                <img className="stars" src={stars} alt="starry Night"/>
                <img className="hollywood" src={hollywoodHills} alt="Hollywood Hills at Night"/>
                <div className="footer-text">
                    <h4>JOIN US</h4>
                    <p>265 E Hollywood Ave, CA,  90028</p>
                    <p>7:00PM - Saturday February 16th, 2019</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React, {useEffect} from "react";
import CharList from "./characters/CharList";
import "./Suspects.css";

const Suspects = props => {

    useEffect(() => {
        let x = document.querySelector("button.guide-text");
        setTimeout(() => {
            x.focus();
        }, 800);
        console.log("I'm working");
    })

    return(
        <div className="characters-container">
            <button className="guide-text" >CLICK ON YOUR CHARACTER TO LEARN THEIR SECRETS!</button>
        <div className="victim-container">
            <h2>VICTIM</h2>
            <CharList status="Victim"/>          
        </div>
        <div className="suspects-container">
            <h2>SUSPECTS</h2>    
            <CharList status="Suspect"/>                
            </div>
        </div>
    )
}

export default Suspects;
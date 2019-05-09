import React from "react";
import CharList from "./characters/CharList";
import "./Suspects.css";

const Suspects = props => {
    //TODO(SEPARATE SUSPECT LOAD FROM VICTIM LOAD)
    return(
        <div>
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
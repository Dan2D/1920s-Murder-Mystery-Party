import React from "react";
import lightRay from "../../images/bg/Light-Shape.png";
import lightFigure from "../../images/bg/flap-shadow.png";

const Title = props => {   


    // TODO(CYCLE THROUGH DIFFERENT DOORWAY FIGURES ON TRANSITION)
    return(
    <div className="title-container">
        <div className="light-container">
            <img id="title-light-figure" src={lightFigure} alt="light-figure"/>
            <img id="title-light-ray" src={lightRay}  width="100%" alt="light-shape"/>
            <h1>MURDER MYSTERY PARTY</h1>
        </div>
    </div>
    )
}

export default Title;
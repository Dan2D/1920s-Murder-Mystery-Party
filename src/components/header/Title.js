import React from "react";

const Title = props => {   
    return(
    <div className="title-container">
        <div className="title-top">
            <img className="title-top__figure" src={require("../../images/bg/flap-shadow.png")} alt="light-figure"/>
            <img className="title-top__door" src={require("../../images/bg/title-door.png")} alt="door"/>
            <div className="title-bottom">
                <h1 className="title-bottom__title">MURDER MYSTERY PARTY</h1>
                <img className="title-bottom__light-bg" src={require("../../images/bg/title-light.png")} alt="light-shape"/>
            </div>
        </div>
    </div>
    )
}

export default Title;
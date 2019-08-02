import React from "react";

const NavLnks = (props) => {

    let lightUpStyle= {
        opacity: 1,
        color: '#F0FF45',
        textShadow: '0px 0px 10px currentColor, -0px -0px 10px currentColor', 
    }
    const home = "home";
    const news = "news";
    const suspects = "suspects";

    return(
        <div className="nav-btns-container">
            <button
            className="nav-btn--link" 
            href="#" 
            style={props.content === home ? lightUpStyle : null} 
            onClick={() => props.onClick(home)}>
                home
            </button>
            <button 
            className="nav-btn--link" 
            href="#"  
            style={props.content === news ? lightUpStyle : null} 
            onClick={() => props.onClick(news)}>
                news
            </button>
            <button 
            className="nav-btn--link" 
            href="#" 
            style={props.content === suspects ? lightUpStyle : null} 
            onClick={() => props.onClick(suspects)}>
                suspects
            </button>
            <button 
            className="nav-btn--guide" 
            onBlur={() => props.menuClick("blur")} 
            onClick={() => props.menuClick("click")}  
            >
                <img className="nav-btn--guide__question" src={require("../../../images/ui/question-mark.png")} alt="magnifying glass"/>
                GUIDES
            </button>
        </div>
    )
}

export default NavLnks;
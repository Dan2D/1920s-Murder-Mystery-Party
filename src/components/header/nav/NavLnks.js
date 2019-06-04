import React from "react";

const NavLnks = (props) => {

    let lightUpStyle= {
        opacity: 1,
        color: '#F0FF45',
        textShadow: '0px 0px 10px currentColor, -0px -0px 10px currentColor', 
    }

    return(
        <div className="navLnks-container">
            <button href="#" style={props.content === "home" ? lightUpStyle : null} onClick={() => props.onClick("home")}>home</button>
            <button href="#"  style={props.content === "news" ? lightUpStyle : null} onClick={() => props.onClick("news")}>news</button>
            <button href="#" style={props.content === "suspects" ? lightUpStyle : null} onClick={() => props.onClick("suspects")}>suspects</button>
        </div>
    )
}

export default NavLnks;
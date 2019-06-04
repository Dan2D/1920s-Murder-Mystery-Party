import React from "react";
import Nav from "./header/nav/Nav";

const Header = props => {
    return(
        <div className="header-container">
            <Nav content={props.content} onClick={props.onClick}/>
        </div>
    )
}

export default Header;
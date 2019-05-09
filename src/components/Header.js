import React from "react";
import Nav from "./header/nav/Nav";
import Title from "./header/Title";

const Header = props => {
    return(
        <div className="header-container">
            <Nav />
        </div>
    )
}

export default Header;
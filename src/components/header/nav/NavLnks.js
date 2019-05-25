import React from "react";

const NavLnks = (props) => {
    return(
        <div className="navLnks-container">
            <a href="#" onClick={() => props.onClick("home")}>HOME</a>
            <a href="#" onClick={() => props.onClick("news")}>NEWS</a>
            <a href="#" onClick={() => props.onClick("suspects")}>SUSPECTS</a>
        </div>
    )
}

export default NavLnks;
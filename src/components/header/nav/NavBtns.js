import React from "react";
import questionMrk from "../../../images/ui/question-mark.png";

const NavBtns = props => {
    return(
        <div className="navBtns-container">
            <button onBlur={() => props.onClick("blur")} onClick={() => props.onClick("click")}  ><img src={questionMrk} alt="magnifying glass"/>GUIDES</button>
        </div>
    )
}

export default NavBtns;
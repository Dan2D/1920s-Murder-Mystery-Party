import React from 'react';
import keyhole from "../../images/ui/keyhole.png";

function PasswordBtn(props) {
    return (
            <button className="keyhole" onClick={() => props.onClick()}><img src={keyhole} alt="keyhole"/></button>
    )
}

export default PasswordBtn

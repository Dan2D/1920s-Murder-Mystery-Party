import React from "react";
import doorSlot from "../../images/ui/door-slot.png";
import "./Modal.css"


function ModalPass (props) {

  // TODO(MANAGE INPUT W/STATE)




  return (
    <div className="modal-container closed">
      <img className="door-img" src={doorSlot} alt="door slide"/>
      <div className="modal-header">
        <h4>WHAT'S THE PASSWORD?</h4>
        <button onClick={(e) => props.onBlur(e)}><span aria-hidden="true">X</span></button>
      </div>
      <div className="modal-body">
        <input type="text"  onInput={(e) => props.onInput(e.target.value)}/>
        <button className="modal-submit" onClick={() => props.onClick() }>SUBMIT</button>
      </div>
    </div>
  )
}

export default ModalPass;



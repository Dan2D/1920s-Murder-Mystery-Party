import React from "react";
import doorSlot from "../../images/ui/door-slot.jpg";
import "./Modal.css"

// TODO(CHANGE ALL EVENT HANDLERS NAMING TO START WITH handle)
// TODO(IF CLASS THEN CAN JUST PASS IN E THROUGH FUNCTION NO NEED TO (e) => {handle(e)})
function ModalPass (props) {

  function handleInput(e) {
    let status =  e.keyCode === 13 ? "submit" : e.keyCode === 27 ? "exit" : null ;
    if (e.keyCode === 13){e.currentTarget.blur();}
    return status === "submit" ? props.onClick() : status === "exit" ? props.onClose() : null;
  }

  return (
    <div className="modal-container closed">
      <img className="door-img" src={doorSlot} alt="door slide"/>
      <div className="modal-header">
        <h4>WHAT'S THE PASSWORD?</h4>
        <button aria-label="close" onClick={(e) => props.onClose(e)}><span aria-hidden="true">X</span></button>
      </div>
      <div className="modal-body">
        <input type="text" label="password-input" onKeyDown={(e) => handleInput(e)}/>
        <button className="modal-submit" onClick={() => props.onClick() }>SUBMIT</button>
      </div>
    </div>
  )
}

export default ModalPass;



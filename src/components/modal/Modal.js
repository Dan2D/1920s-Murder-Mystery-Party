import React from "react";
import doorSlot from "../../images/ui/door-slot.jpg";
import "./Modal.css"

function ModalPass (props) {

  function handleInput(e) {
    let status =  e.keyCode === 13 ? "submit" : e.keyCode === 27 ? "exit" : null ;
    if (e.keyCode === 13){e.currentTarget.blur();}
    return status === "submit" ? props.onClick() : status === "exit" ? props.onClose() : null;
  }

  return (
    <div className="modal-container closed">
      <img 
        className="door-img" 
        src={doorSlot} 
        alt="door slide"/>
      <div className="modal-header">
        <h4>WHAT'S THE PASSWORD?</h4>
        <button 
          className="modal-close-btn"
          aria-label="close" 
          onClick={() => props.onClose()}>
          X
        </button>
      </div>
      <div className="modal-body">
        <label htmlFor="password"></label>
        <input 
          id="password"
          type="text" 
          aria-label="password-input" 
          onKeyDown={(e) => handleInput(e)}/>
        <button 
          className="modal-submit" 
          label="submit"
          onClick={() => props.onClick() }>
            SUBMIT
        </button>
      </div>
    </div>
  )
}

export default ModalPass;



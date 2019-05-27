import React from "react"; 
import doorSlot from "../images/ui/door-slot.png";
import "./Modal.css"


function ModalPass (props) {


  function modalClose(e) {
    let modal = document.querySelector("div.modal-container");
    modal.className = "modal-container closed"
    e.target.value = "";
  }

  return (
    <div className="modal-container closed">
      <img className="door-img" src={doorSlot} alt="door slide"/>
      <div className="modal-header">
        <h4>PASSWORD?</h4>
        <button onClick={modalClose}><span aria-hidden="true">X</span></button>
      </div>
      <div className="modal-body">
        <input type="text" autoFocus onBlur={modalClose}/>
      </div>
    </div>
  )
}

export default ModalPass;



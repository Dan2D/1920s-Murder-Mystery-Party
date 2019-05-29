import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import PasswordModal from "./modal/Modal";
import PasswordBtn from "./modal/PasswordBtn";
import {Transition} from "react-spring/renderprops";
import "./MainContent.css"

function MainContent(props) {
    const state = props.state;
    //TODO(SECURE WAY TO HANDLE PASSWORD STATE??)
    const [password, setPassword] = useState("");
    let tempPassword = "";

    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        content.scrollTo(0,0);
      }
    );
//----------------FUNCTIONS--------------------//
    function modalHandle() {
        let modal = document.querySelector("div.modal-container");
        modal.className = "modal-container open";
        modal.querySelector('input').focus();
    }

    function modalClose(e) {
        let modal = document.querySelector("div.modal-container");
        e.target.value = "";
        setPassword("");
        modal.className = "modal-container closed"; 
      }

    function passwordInputHandler(inputTxt) {
        return tempPassword = inputTxt;
      }

      function passwordSubmitHandler() {
          setPassword(tempPassword);
          console.log(password);
          tempPassword = "";
          return tempPassword;
      }

        return(
            <div className="mainContent-container">
                <PasswordModal onClick={passwordSubmitHandler} onInput={passwordInputHandler} onBlur={modalClose}/>
                <div className="content">
                    <Transition
                        items={state}
                        from={{transform: 'translateX(100%)'}}
                        enter={{transform: 'translateX(0%)', position: 'absolute', top: 0}}
                        leave={{transform: 'translateX(-110%)'}}>
                        {state => state && (props => 
                        <div style={props}>
                            {state === "news" ? <News /> : state === "suspects" ? <Suspects password={password}/> : <Home />}
                            <Footer />
                        </div>)
                        }
                    </Transition>
                </div>
                {state === "suspects" ? <PasswordBtn onClick={modalHandle}/> : null} 
            </div>
        )
}

export default MainContent;
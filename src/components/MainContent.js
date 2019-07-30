import React, {useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import PasswordModal from "./modal/Modal";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import smoothscroll from "smoothscroll-polyfill";
import "./MainContent.css"

smoothscroll.polyfill();

function MainContent(props) {
    const content = props.content;

    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        setTimeout(() => {content.scrollTo(0,0)}, 500);
        
        let height = document.documentElement.clientHeight;
        document.documentElement.style.setProperty("--client-height", height + 5 + "px");
      }
    );

    function modalHandle() {
        let modal = document.querySelector("div.modal-container");
        modal.className = "modal-container open";
        modal.querySelector("input").focus();
    }

    function modalClose() {
        let modal = document.querySelector("div.modal-container");
        let modalInput = document.querySelector("div.modal-body>input");
        modalInput.value = "";
        modal.className = "modal-container closed"; 
      }

    function passwordSubmitHandler() {
        let password = document.querySelector("div.modal-body>input").value;
        password = password.toLowerCase();
        let passwordArr=["shhh", "dope fiend", "scarlet songbird", "double agent", "---secret---", "akvavit", "cancelled stamp", "fatal attraction", "clothesline", "heavy sugar", "heebie jeebies"];
        function passwordCheck(password) {
            var secretTxt = document.querySelectorAll("div.secret-container");
            for (let i = 0; i < passwordArr.length; i++){
                if (password === passwordArr[i]) {
                    secretTxt[i].className = "secret-container open"; 
                    if (password === "double agent"){
                        document.querySelector('div.character-info[data-char="Ramona Simpson"]').style.display = "block";
                        secretTxt[i+1].className = "secret-container open"; 
                    }               
                }
            }
        }        
        passwordCheck(password);
        modalClose(); 
    }
        return(
            <div className="mainContent-container">
                <PasswordModal onClick={passwordSubmitHandler} 
                               onClose={modalClose}/>
                <div className="content">
                    <TransitionGroup>
                            <CSSTransition
                            key={props.content}
                            timeout={1000}
                            classNames="fade">
                                {content === "news" ? <News /> : content === "suspects" ? <Suspects onClick={modalHandle}/> : <Home />}
                            </CSSTransition>
                    </TransitionGroup>
                    <Footer />
                </div>
            </div>
        )
}

export default MainContent;
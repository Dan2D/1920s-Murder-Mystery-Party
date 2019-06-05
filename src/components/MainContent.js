import React, {useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import PasswordModal from "./modal/Modal";
import {Transition} from "react-spring/renderprops";
import "./MainContent.css"

function MainContent(props) {
    const content = props.content;

    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        content.scrollTo(0,0);
        let height = document.documentElement.clientHeight;
        document.documentElement.style.setProperty("--client-height", height + 5 + "px");
      }
    );
//----------------FUNCTIONS--------------------//
    function modalHandle() {
        let modal = document.querySelector("div.modal-container");
        modal.className = "modal-container open";
        modal.querySelector("input").focus();
    }

    function modalClose(e) {
        let modal = document.querySelector("div.modal-container");
        let modalInput = document.querySelector("div.modal-body>input");
        modalInput.value = "";
        modal.className = "modal-container closed"; 
      }

    function passwordSubmitHandler() {
        let password = document.querySelector("div.modal-body>input").value;
        password = password.toLowerCase();
        let passwordArr=["shhh", "dope fiend", "scarlet songbird", "double agent", "evil twin", "akvavit", "cancelled stamp", "fatal attraction", "clothesline", "heavy sugar", "heebie jeebies"];
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
                    <Transition
                        items={content}
                        from={{opacity: 0}}
                        enter={{opacity: 1, position: 'absolute', top: 0, width: '100%'}}
                        leave={{opacity: 0}}>
                        {content => content && (props => 
                        <div style={props}>
                            {content === "news" ? <News /> : content === "suspects" ? <Suspects onClick={modalHandle}/> : <Home />}
                            <Footer />
                        </div>)
                        }
                    </Transition>
                </div>
            </div>
        )
}

export default MainContent;
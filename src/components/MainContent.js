import React, {useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import ModalPass from "./Modal";
import keyhole from "../images/ui/keyhole.png";
import {Transition} from "react-spring/renderprops";
import "./MainContent.css"

function MainContent(props) {


    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        content.scrollTo(0,0);
      }
    )

    const state = props.state;
    let modalStatus = "modal-container closed"

    function modalHandle() {
        let modal = document.querySelector("div.modal-container");
        modal.className = "modal-container open";
        modal.querySelector('input').focus();
    }
        return(
            <div className="mainContent-container">
                <ModalPass />
                <div className="content">
                    <Transition
                        items={state}
                        from={{transform: 'translateX(100%)'}}
                        enter={{transform: 'translateX(0%)', position: 'absolute', top: 0}}
                        leave={{transform: 'translateX(-110%)'}}>
                        {state => state && (props => 
                        <div style={props}>
                            {state === "news" ? <News /> : state === "suspects" ? <Suspects /> : <Home />}
                            <Footer />
                        </div>)
                        }
                    </Transition>
                </div>
                {state === "suspects" ? <button className="keyhole" onClick={modalHandle}><img src={keyhole} alt="keyhole"/></button> : null} 
            </div>
        )
}

export default MainContent;
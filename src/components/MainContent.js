import React, {useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import smoothscroll from "smoothscroll-polyfill";
import "./MainContent.css"

smoothscroll.polyfill();

function MainContent(props) {
    const content = props.content;

    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        setTimeout(() => {content.scrollTo(0,0)}, 500);
      }
    );

    
        return(
            <div className="mainContent-container">
                <div className="content">
                    <TransitionGroup>
                            <CSSTransition
                            key={props.content}
                            timeout={1000}
                            classNames="fade">
                                {content === "news" ? <News /> : content === "suspects" ? <Suspects onClick={() => props.onClick()}/> : <Home />}
                            </CSSTransition>
                    </TransitionGroup>
                    <Footer />
                </div>
            </div>
        )
}

export default MainContent;
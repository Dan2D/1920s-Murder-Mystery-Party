import React, {useEffect} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import {Transition} from "react-spring/renderprops";
import "./MainContent.css"

function MainContent(props) {


    useEffect(() => {
        let content = document.querySelector("div.mainContent-container");
        content.scrollTo(0,0);
      }
    )

    // const pageSwitch = useTransition(index, p => p, {
    //     from: {opacity: 0, transform: "translateX(100%)"},
    //     enter: {opacity: 1, transform: "translateX(0%)"},
    //     leave: {opacity: 0, transform: "translateX(100%)"}
    // })

    // const content = [() => <div className="content"><Home /></div>,
    //                () => <div className="content"><News/></div>,
    //                () => <div className="content"><Suspects /></div>]
    const state = props.state;

        return(
            <div className="mainContent-container">
                <div className="content">
                    <Transition
                        items={state}
                        from={{transform: 'translateX(100%)'}}
                        enter={{transform: 'translateX(0%)', position: 'absolute', top: 0}}
                        leave={{transform: 'translateX(-110%)'}}>
                        {state => state === "home" ? props => <div style={props}><Home /><Footer/></div> :
                        state === "news" ? props => <div style={props}><News /><Footer/></div> :
                        props => <div style={props}><Suspects /><Footer/></div> }
                    </Transition>
                </div>    
            </div>
        )
}

export default MainContent;
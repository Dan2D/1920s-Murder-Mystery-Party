import React from "react";
import NavLnks from "./NavLnks";
import NavBtns from "./NavBtns";
import SubMenu from "./SubMenu";
import Title from "../Title";
import "./Nav.css";

class Nav extends React.Component {
    componentDidMount() {
        let root = document.documentElement;
        
        function titleHeight() {       
            let lightWidth = window.innerWidth;
            console.log(lightWidth);
            return lightWidth
        };
 //TODO(ADJUST THE BG BEHIND NAV TO BLOCK IMAGE AND TEXT)
        root.style.setProperty("--title-pos",  titleHeight()*(0.057) - 39 + "px");
        root.style.setProperty("--sub-menu-pos", titleHeight()*(0.08)  + "px");

        window.addEventListener("resize", e => {
            let height = titleHeight();
            console.log(height);
            root.style.setProperty("--title-pos", height*(0.057) - 39 + "px");
            root.style.setProperty("--sub-menu-pos", height*(0.08)  + "px");
        });  
    }



    render(){        
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-top">
                    <NavLnks />
                    <NavBtns />
                </div>
            <div className="nav-bottom">
                <SubMenu />
                <Title />
            </div>
            </nav>
        </div>
    )
}
}

export default Nav;
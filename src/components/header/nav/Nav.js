import React, {Component} from "react";
import NavLnks from "./NavLnks";
import NavBtns from "./NavBtns";
import SubMenu from "./SubMenu";
import Title from "../Title";
import "./Nav.css";

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSubMenuOpen: false,
        };
    }

    componentDidMount() {
        let root = document.documentElement;  
        function winWidth() {       
            let winWidth = window.innerWidth;
            return winWidth;
        };
        function setDynTtlPos(windowWidth){
            windowWidth > 468 ? 
            root.style.setProperty("--title-pos",  winWidth()*(0.018) + 10 + "px") :
            root.style.setProperty("--title-pos",  winWidth()*(0.018) + 8 + "px");

        }
        function setDynSubMnuPos(windowWidth) {
            root.style.setProperty("--sub-menu-pos", winWidth()*(0.112) - 39 + "px");
        }
        setDynTtlPos(winWidth());
        setDynSubMnuPos(winWidth());
        window.addEventListener("resize", e => {
            let windowWidth = winWidth();
            setDynTtlPos(windowWidth);
            setDynSubMnuPos(windowWidth);
        });  
    }

    subMenuClickHandler = (action) => {
        if (window.innerWidth > 468  && action === "blur") {
            return null;
        }
        return this.setState(prevState => ({isSubMenuOpen: !prevState.isSubMenuOpen}));
    }

    render(){            
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-top">
                    <NavLnks content={this.props.content} onClick={this.props.onClick}/>
                    <NavBtns onClick={this.subMenuClickHandler} />
                </div>
                <div className="nav-bottom">
                    <SubMenu open={this.state.isSubMenuOpen ? "subMenu-container-open" : "subMenu-container"}/>
                    <Title />
                </div>
            </nav>
        </div>
    )}
}

export default Nav;
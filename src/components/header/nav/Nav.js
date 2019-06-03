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

    isGuideBtnFocusedHandler = () => {this.setState({isSubMenuOpen: false})}

    subMenuClickHandler = () => {
        this.setState(prevState => ({isSubMenuOpen: !prevState.isSubMenuOpen}));
    }

    componentDidMount() {
        let root = document.documentElement;  
        function lightWidth() {       
            let lightWidth = window.innerWidth;
            return lightWidth
        };

        root.style.setProperty("--title-pos",  lightWidth()*(0.018) + 10 + "px");
        root.style.setProperty("--sub-menu-pos", lightWidth()*(0.112) - 39 + "px");

        window.addEventListener("resize", e => {
            let height = lightWidth();
            root.style.setProperty("--title-pos", height*(0.018) + 10 + "px");
            root.style.setProperty("--sub-menu-pos", height*(0.112) - 39 + "px");
        });  
    }

    render(){            
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-top">
                    <NavLnks onClick={this.props.onClick}/>
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
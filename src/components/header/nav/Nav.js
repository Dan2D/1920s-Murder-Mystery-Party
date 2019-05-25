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
            subMenuOpen: false,
            guideBtnFocus: false,
        };
    }

    guideBtnFocusHandler = (state) => {
        console.log(this.state.guideBtnFocus)
        this.setState({guideBtnFocus: false, subMenuOpen: false});
    }

    subMenuClickHandler = () => {
            this.setState(prevState => ({subMenuOpen: !prevState.subMenuOpen, guideBtnFocus: true}));
    }

    
    

    componentDidMount() {
        let root = document.documentElement;
        
        function lightWidth() {       
            let lightWidth = window.innerWidth;
            return lightWidth
        };

        root.style.setProperty("--title-pos",  lightWidth()*(0.021) + 8 + "px");
        root.style.setProperty("--sub-menu-pos", lightWidth()*(0.11) - 30 + "px");

        window.addEventListener("resize", e => {
            let height = lightWidth();
            root.style.setProperty("--title-pos", height*(0.021) + 8 + "px");
            root.style.setProperty("--sub-menu-pos", height*(0.11) - 30 + "px");
        });  
    }

    render(props){            
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-top">
                    <NavLnks onClick={this.props.onClick}/>
                    <NavBtns onBlur={this.guideBtnFocusHandler}  onClick={this.subMenuClickHandler} />
                </div>
            <div className="nav-bottom">
                <SubMenu open={this.state.subMenuOpen && this.state.guideBtnFocus ? "subMenu-container-open" : "subMenu-container"}/>
                <Title />
            </div>
            </nav>
        </div>
    )
}
}

export default Nav;
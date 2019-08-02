import React, {Component} from "react";
import NavLnks from "./NavLnks";
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

    subMenuClickHandler = (action) => {
        if (action === "blur"){
            if (window.innerWidth > 992) {
                return null;
            }
            return this.setState({isSubMenuOpen: false});
        }
        return this.setState(prevState => ({isSubMenuOpen: !prevState.isSubMenuOpen}));
    }

    render(){            
    return(
        <div className="nav-container">
            <nav>
                <div className="nav-top">
                    <NavLnks content={this.props.content} onClick={this.props.onClick} menuClick={this.subMenuClickHandler}/>
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
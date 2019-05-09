import React, {Component} from "react";
import Footer from "./Footer";
import Home from "./main/Home";
import News from "./main/News";
import Suspects from "./main/Suspects";
import "./MainContent.css"

class MainContent extends Component {
    constructor(props) {
        super(props);

        this.state = {content:  "home",}
        }

    //TODO (ADD LOGIC TO LOAD CONTENT BASED ON STATE, includes bg picture)
    render(){
        return(
            <div className="mainContent-container">
                    <div className="content">
                        <Suspects />
                    </div>
                    <Footer />                
            </div>
        )
    }
}

export default MainContent;
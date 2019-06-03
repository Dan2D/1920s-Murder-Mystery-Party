import React, {Component} from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {Transition} from "react-spring/renderprops";
import "./App.css";
import homeBg from "./images/bg/Poster-Girl.png";
import newsBg from "./images/bg/Poster-Rules.png";
import suspectsBg from "./images/bg/Male-Closeup.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:  "home",
      bg: homeBg,
      };
    }

    contentHandler = (pageState) => {
        var main = document.getElementsByClassName("App");
        main[0].scrollTo(0,0);
        var backgroundImg = pageState === "news" ? newsBg : pageState === "suspects" ? suspectsBg : homeBg;
        this.setState({content: pageState, bg: backgroundImg});
    }


    render(){
      const content = this.state.content;
      let style = {
        position: "absolute",
        paddingTop: 4 + "vw",
        bottom: 0,
        right:  0,
        height: 90 + "vh",
        opacity: 0.4,
        filter: "blur(" + 2 + "px)",
      }
    return (
      <div className="App">
        <Header onClick={this.contentHandler}/>
        <MainContent state={this.state.content}/>
        <Transition
          items={content}
          from={{opacity: 0, transform: 'translateX(100%)'}}
          enter={{opacity: 1, transform: 'translateX(0%)', zIndex: 0}}
          leave={{opacity: 0, transform: 'translateX(-100%)'}}>
            {content => content && (props =>
              <div style={props}>
                {content === "news" ? <img src={newsBg} style={style} alt="detective"/> : 
                content === "suspects" ? <img src={suspectsBg} style={style} alt="suspicious man"/> : 
                <img src={homeBg} style={style} alt="flapper girl"/>}
              </div>)
            }
        </Transition>  
      </div>
    )
  }
}

export default App;

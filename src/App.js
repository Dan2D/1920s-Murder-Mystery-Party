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

    componentDidMount() {
      const bgImgs = [homeBg, newsBg, suspectsBg];

      bgImgs.forEach((picture) => {
        const img = new Image();
        img.src = picture.src;
      })
    }

    contentHandler = (pageState) => {
      // document.querySelector("div.navLnks-container").style.textShadow = "none";
      // document.querySelector('a[data-ref=' + pageState + ']').style.textShadow = "0px 0px 10px currentColor, -0px -0px 10px currentColor";
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
        <Header onClick={this.contentHandler} content={this.state.content}/>
        <MainContent content={this.state.content}/>
        <Transition
          items={content}
          from={{opacity: 0, transform: 'translateX(100%)'}}
          enter={{opacity: 1, transform: 'translateX(0%)', zIndex: 0}}
          leave={{opacity: 0, transform: 'translateX(-100%)'}}>
            {content => content && (props =>
              <div style={props} className="bg-container">
                {content === "news" ? <img src={newsBg} style={style} data-img="news" alt="detective"/> : 
                content === "suspects" ? <img src={suspectsBg} style={style} data-img="suspects" alt="suspicious man"/> : 
                <img src={homeBg} style={style} data-img="home" alt="flapper girl"/>}
              </div>)
            }
        </Transition>  
      </div>
    )
  }
}

export default App;

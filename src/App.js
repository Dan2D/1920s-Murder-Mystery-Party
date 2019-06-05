import React, {Component} from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {Transition, animated} from "react-spring/renderprops";
import "./App.css";
import  bgImgObj  from "./components/BG";
const {homeBg, newsBg, suspectsBg} = bgImgObj;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:  "home",
      bg: homeBg,
      };
    }
   
    componentDidMount() {
      const bg = [homeBg, newsBg, suspectsBg];
      bg.forEach((picture) => {
        const img = new Image();
        img.src = picture;
      })
    }

    contentHandler = (pageState) => {
        var backgroundImg = pageState === "news" ? newsBg : pageState === "suspects" ? suspectsBg : homeBg;
        this.setState({content: pageState, bg: backgroundImg});
    }

    render(){
      const content = this.state.content;
      let style = {
        position: "fixed",
        paddingTop: 4 + "vw",
        top: 55 + "px",
        right:  0,
        height: 100 + "vh",
        opacity: 0.4,
        filter: "blur(" + 2 + "px)",
      }
  
    return (
      <div className="App">
        <Header onClick={this.contentHandler} content={this.state.content}/>
        <Transition
        native
          items={content}
          from={{opacity: 0, transform: 'translateX(100%)'}}
          enter={{opacity: 1, transform: 'translateX(0%)'}}
          leave={{opacity: 0, transform: 'translateX(-100%)'}}>
            {content => content === "home" ?
            content && (props =>
              <animated.div style={props} keys="home" className="bg-container">
                <img src={homeBg} style={style} data-img="home" alt="flapper girl"/>
              </animated.div>) :
              content === "news" ?
              content && (props =>
              <animated.div style={props} keys="news" className="bg-container">
                <img src={newsBg} style={style} data-img="news" alt="detective"/>
              </animated.div>) :
              content && (props =>
              <animated.div style={props} keys="suspects" className="bg-container">
                <img src={suspectsBg} style={style} data-img="suspects" alt="suspicious man"/> 
              </animated.div>)
            }
        </Transition>  
        <MainContent content={this.state.content}/>
      </div>
    )
  }
}

export default App;

// <div style={props} keys={content => content.key} className="bg-container">
// {content === "news" ? <img src={newsBg} style={style} data-img="news" alt="detective"/> : 
// content === "suspects" ? <img src={suspectsBg} style={style} data-img="suspects" alt="suspicious man"/> : 
// <img src={homeBg} style={style} data-img="home" alt="flapper girl"/>}
// </div>
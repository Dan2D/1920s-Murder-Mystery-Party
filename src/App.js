import React, {Component} from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:  "home",
      };
    }
   

    contentHandler = (pageState) => {
        this.setState({content: pageState});
    }

    render(){
    return (
      <div className="App">
        <Header onClick={this.contentHandler} content={this.state.content}/>
        <TransitionGroup>
          <CSSTransition
          key={this.state.content}
          timeout={1500}
          classNames="push"
          >
              <img className="bg" src={require(`./images/bg/${this.state.content}-bg.png`)} data-img={this.state.content} alt={this.state.content}/>
            </CSSTransition>
        </TransitionGroup>  
        <MainContent content={this.state.content}/>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import Header from "./components/Header";
import PasswordModal from "./components/modal/Modal";
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

     modalHandle = () => {
      let modal = document.querySelector("div.modal-container");
      modal.className = "modal-container open";
      modal.querySelector("input").focus();
  }

   modalClose = () => {
      let modal = document.querySelector("div.modal-container");
      let modalInput = document.querySelector("div.modal-body>input");
      modalInput.value = "";
      modal.className = "modal-container closed"; 
    }

   passwordSubmitHandler = () => {
      let password = document.querySelector("div.modal-body>input").value;
      password = password.toLowerCase();
      let passwordArr=["shhh", "dope fiend", "scarlet songbird", "double agent", "---secret---", "akvavit", "cancelled stamp", "fatal attraction", "clothesline", "heavy sugar", "heebie jeebies"];
      function passwordCheck(password) {
          var secretTxt = document.querySelectorAll("div.secret-container");
          for (let i = 0; i < passwordArr.length; i++){
              if (password === passwordArr[i]) {
                  secretTxt[i].className = "secret-container open"; 
                  if (password === "double agent"){
                      document.querySelector('div.character-info[data-char="Ramona Simpson"]').style.display = "block";
                      secretTxt[i+1].className = "secret-container open"; 
                  }               
              }
          }
      }        
      passwordCheck(password);
      this.modalClose(); 
  }

    render(){
    return (
      <div className="App">
        <Header onClick={this.contentHandler} content={this.state.content}/>
        <PasswordModal onClick={this.passwordSubmitHandler} 
                               onClose={this.modalClose}/>
        <TransitionGroup>
          <CSSTransition
          key={this.state.content}
          timeout={1500}
          classNames="push"
          >
              <img className="bg" src={require(`./images/bg/${this.state.content}-bg.png`)} data-img={this.state.content} alt={this.state.content}/>
            </CSSTransition>
        </TransitionGroup>  
        <MainContent content={this.state.content} onClick={this.modalHandle}/>
      </div>
    )
  }
}

export default App;

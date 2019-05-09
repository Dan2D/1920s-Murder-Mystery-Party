import React from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <div className="bg-image"></div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatMap from './Map/map.js';
import Header from './header.js'

class App extends Component { 
  render() {
    return (
      <div className = "homePage">
        <Header />
      <div className ="App" id = 'catMap'> <CatMap /> </div>
      </div>
    );
  
  }
}

export default App;



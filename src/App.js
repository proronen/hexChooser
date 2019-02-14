import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Hexit from './containers/Hexit'; 

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header /> 
        <Hexit />
        <Footer />        
      </div>
    );
  }
}

export default App;

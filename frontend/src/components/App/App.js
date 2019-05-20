import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;

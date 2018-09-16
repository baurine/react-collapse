import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse from './Collapse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <a href="https://github.com/baurine/react-collapse">Go to GitHub</a>
          <p></p>

          <Collapse/>
          <Collapse/>

          <p>Auto Collapse</p>
          <div>
            <Collapse autoCollapse={true}/>
            <Collapse autoCollapse={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

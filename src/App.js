import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse1 from './Collapse1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <a href="https://github.com/baurine/react-Collapse1">Go to GitHub</a>
          <p></p>

          <Collapse1/>
          <Collapse1/>

          <p>Auto Collapse1</p>
          <div>
            <Collapse1 autoCollapse={true}/>
            <Collapse1 autoCollapse={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

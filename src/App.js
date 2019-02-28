import React, { Component } from 'react';
import logo from './logo.svg';
import girl from './image/girl.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            <img src={girl} className="girl-logo"/>
          </p>
          <p>
            嗨，小仙女，欢迎来到小仙女的游乐园~
          </p>
          {/*<a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        </header>
      </div>
    );
  }
}

export default App;

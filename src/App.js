import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent.js';
import ResultComponent from './components/ResultComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-body">
        <div>
          <SearchComponent />
          </div>
        <div className="ResultComponent">
          <ResultComponent/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

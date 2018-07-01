import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchPanel from './components/SearchPanel/SearchPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/> 
      <SearchPanel />         
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

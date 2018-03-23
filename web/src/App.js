import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamEditor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Team Up</h1>
        <div className="editor-comp">
          <TeamEditor />
        </div>
      </div>
    );
  }
}

export default App;

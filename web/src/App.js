import React, { Component } from 'react';
import './App.css';
import SocketEditor from './components/SocketEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Team Up</h1>
        <div className="editor-comp">
          <SocketEditor />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "h",
      endpoint: "http://localhost:4001"
    };

    this.socket = socketIOClient(this.state.endpoint);

    this.socket.on('update content', content => {
      console.log('updating..');
      this.setState({ content });
    });
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
    this.socket.emit('update content', e.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <textarea onChange={this.handleChange} value={this.state.content} />

      </div>
    );
  }
}

export default App;

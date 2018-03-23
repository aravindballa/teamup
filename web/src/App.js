import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import TeamEditor from './components/Editor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      endpoint: "http://localhost:4001"
    };

    this.socket = socketIOClient(this.state.endpoint);

    this.socket.on('update content', content => {
      const blocksFromHtml = htmlToDraft(content);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      console.log('updating..', draftToHtml(convertToRaw(editorState.getCurrentContent())));
      this.setState({ editorState });
    });
  }

  send = editorState => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log('sending...', content);
    this.socket.emit('update content', content);
  }

  render() {
    return (
      <div className="App">
        <h1>Team Up</h1>
        <div className="editor-comp">
          <TeamEditor editorState={this.state.editorState} send={this.send} />
        </div>
      </div>
    );
  }
}

export default App;

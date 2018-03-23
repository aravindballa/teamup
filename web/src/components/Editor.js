import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import socketIOClient from 'socket.io-client';

class TeamEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      endpoint: "http://localhost:4001"
    }

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

  onEditorStateChange = (editorState) => {
    // this.setState({
    //   editorState,
    // });
    this.send(editorState);
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
};

export default TeamEditor;

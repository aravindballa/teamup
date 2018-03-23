import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TeamEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: this.props.editorState
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ editorState: nextProps.editorState });
  // }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.send(editorState);
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

import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import SlateEditor from './SlateEditor';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: "http://localhost:4001"
    }

    this.uniqueID = Math.round(Math.random() * 1000000000000);

    this.socket = socketIOClient(this.state.endpoint);

    this.socket.on('update content', data => {
      const content = JSON.parse(data)
      const { uniqueID, content: ops } = content;
      if (ops !== null && this.uniqueID !== uniqueID) {
        setTimeout(() => {
          this.slate.applyOperations(ops);
        });
      }
    });
  }

  send = content => {
    const data = JSON.stringify({ content, uniqueID: this.uniqueID });
    this.socket.emit('update content', data);
  }

  onChange = change => {
    const ops = change.operations
      .filter(o => o.type !== 'set_selection' && o.type !== 'set_value')
      .toJS();

    if (ops.length > 0) {
      this.send(ops);
    }
  }

  render() {
    return (
      <SlateEditor
        ref={slateE => { this.slate = slateE; }}
        onChange={this.onChange}
      />
    );
  }
};

export default Editor;

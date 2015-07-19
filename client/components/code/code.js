'use strict';

import React from 'react';
import CodeStore from '../../stores/CodeStore.js';

const Post = React.createClass({
  getInitialState: function() {
    return CodeStore.getState();
  },

  componentDidMount: function() {
    CodeStore.listen(this.onChange);
  },

  componentWillUnmount: function() {
    CodeStore.unlisten(this.onChange);
  },

  onChange: function(state) {
    this.setState(state);
  },

  render: function() {
    return (
      <ul>
        {this.state.code.map((code) => {
          return (
            <li>{code.name}</li>
          );
        })}
      </ul>
    );
  }
});

export default Code;

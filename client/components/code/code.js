'use strict';

import React from 'react';
import CodeStore from '../../stores/CodeStore.js';

const Code = React.createClass({
  getInitialState() {
    return CodeStore.getState();
  },

  componentDidMount() {
    CodeStore.listen(this.onChange);
  },

  componentWillUnmount() {
    CodeStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
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

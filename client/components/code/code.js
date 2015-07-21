'use strict';

import React from 'react';

var CodeStore = require('../../stores/CodeStore');
var CodeActions = require('../../actions/CodeActions');

var Code = React.createClass({
  getInitialState() {
    return CodeStore.getState();
  },

  componentDidMount() {
    CodeStore.listen(this.onChange);
    CodeActions.fetchCode();
  },

  componentWillUnmount() {
    CodeStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.code.length) {
      return (
        <div>
          <img src="/ajax-loader.gif" />
        </div>
      )
    }

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

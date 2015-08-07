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

  addFav(e) {
    console.log(e);
    console.log(CodeStore.getCode());
    var code = CodeStore.getCode(
      Number(e.target.getAttribute('data-id'))
    );
    CodeActions.favoriteCode(code);
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
        {this.state.code.map((code, i) => {
          var favButton = (
            <button onClick={this.addFav} data-id={code.id}>
              Favorite
            </button>
          );

          return (
            <li key={i}>
              {code.name} {code.has_favorite ? '<3' : favButton}
            </li>
          );
        })}
      </ul>
    );
  }
});

export default Code;

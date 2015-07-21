import alt from '../alt';

var CodeFetcher = require('../utils/CodeFetcher');

class CodeActions {
  updateCode(code) {
    this.dispatch(code);
  }

  fetchCode() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();

    CodeFetcher.fetch()
      .then((code) => {
        // we can access other actions within our action through `this.actions`
        this.actions.updateCode(code);
      })
      .catch((errorMessage) => {
        this.actions.codeFailed(errorMessage);
      });
  }

  favoriteCode(codeId) {
    this.dispatch(codeId);
  }

  codeFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(CodeActions);

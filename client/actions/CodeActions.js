import alt from '../alt';

class CodeActions {
  updateCode(code) {
    this.dispatch(code);
  }
}

module.exports = alt.createActions(CodeActions);

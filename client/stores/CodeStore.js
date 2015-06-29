import alt from '../alt';
import CodeActions from '../actions/CodeActions';

class CodeStore {
  constructor() {
    this.code = [];

    this.bindListeners({
      handleUpdateCode: CodeActions.UPDATE_CODE
    });
  }

  handleUpdateCode(code) {
    this.code = code;
  }
}

module.exports = alt.createStore(CodeStore, 'CodeStore');

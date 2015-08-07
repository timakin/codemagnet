import alt from '../alt';

var CodeActions = require('../actions/CodeActions');

class CodeStore {
  constructor() {
    this.code = [];
    this.errorMessage = null;

    // actionのuppercaseは自動変換
    this.bindListeners({
      handleUpdateCode: CodeActions.UPDATE_CODE,
      handleFetchCode: CodeActions.FETCH_CODE,
      handleCodeFailed: CodeActions.CODE_FAILED,
      setFavorites: CodeActions.FAVORITE_CODE
    });
  }

  handleUpdateCode(code) {
    this.code = code;
    this.errorMessage = null;
  }

  handleFetchCode() {
    this.code = [];
  }

  handleCodeFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.code = this.code.map((code) => {
      return {
        id: code.id,
        name: code.name,
        has_favorite: false
      };
    });
  }

  setFavorites(code) {
    this.waitFor(FavoriteCodeStore);

    var favoritedCode = FavoriteCodeStore.getState().code;

    this.resetAllFavorites();

    favoritedCode.forEach((code) => {
      // find each location in the array
      for (var i = 0; i < this.code.length; i += 1) {
        // set has_favorite to true
        if (this.code[i].id === code.id) {
          this.code[i].has_favorite = true;
          break;
        }
      }
    });
  }

  getCode(id) {
    var { code } = this.getState();
    for (var i = 0; i < code.length; i += 1) {
      if (code[i].id === id) {
        return code[i];
      }
    }
    return null;
  }
}

module.exports = alt.createStore(CodeStore, 'CodeStore');

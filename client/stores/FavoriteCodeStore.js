import alt form 'alt';

var CodeActions = require('../actions/CodeActions');

class FavoriteCodeStore {
  constructor() {
    this.code = [];

    this.bindListeners({
      addFavoriteCode: CodeActions.FAVORITE_CODE;
    });
  }

  addFavoriteCode(code) {
    this.code.push(code);
  }
}

module.exports = alt.createStore(FavoriteCodeStore, 'FavoriteCodeStore');

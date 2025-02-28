const GameBoard = require("./gameboard");

class Player {
  constructor() {
    this.gameboard = new GameBoard();
  }
}

module.exports = Player;

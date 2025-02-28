const GameBoard = require("./gameboard");

class Player {
  constructor(type = "human") {
    this.type = type;
    this.gameboard = new GameBoard();

    if (this.type === "computer") {
      this.previousMoves = [];
    }
  }

  generateRandomMove() {
    let move = [];
    // generate moves until -->

    do {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      move = [x, y];
    } while (
      this.previousMoves &&
      this.previousMoves.some((m) => m[0] === move[0] && m[1] === move[1])
    );
    if (this.type === "computer") {
      this.previousMoves.push(move);
    }
    return move;
  }
}

module.exports = Player;

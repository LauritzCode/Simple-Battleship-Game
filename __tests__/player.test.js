const GameBoard = require("../src/gameboard");
const Player = require("../src/player");

describe("Player", () => {
  test("should initialize with a gameBoard", () => {
    const player = new Player();
    expect(player.gameboard).toBeInstanceOf(GameBoard);
  });
});

const GameBoard = require("../src/gameboard");
const Player = require("../src/player");

describe("Player", () => {
  test("should initialize with a gameBoard", () => {
    const player = new Player();
    expect(player.gameboard).toBeInstanceOf(GameBoard);
  });
});

describe("Computer Player", () => {
  test("Should generate a legal move within board bounds (0 to 9", () => {
    const computer = new Player("computer");
    const move = computer.generateRandomMove();
    expect(move[0]).toBeGreaterThanOrEqual(0);
    expect(move[0]).toBeLessThan(10);
    expect(move[1]).toBeGreaterThanOrEqual(0);
    expect(move[1]).toBeLessThan(10);
  });
});

const Ship = require("../src/ship");
const GameBoard = require("../src/gameboard");
// const GameBoard = require("../src/gameboard");

describe("Gameboard", () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new GameBoard();
    ship = new Ship(3);
  });

  test("should place a ship at given coordinates", () => {
    gameboard.placeShip(ship, [0, 0], "horizontal");
    const shipCoords = gameboard.getShipCoordinates();
    expect(shipCoords).toContainEqual([0, 0]);
    expect(shipCoords).toContainEqual([0, 1]);
    expect(shipCoords).toContainEqual([0, 2]);
  });

  test("should register a hit on a ship when attacked", () => {
    gameboard.placeShip(ship, [1, 1], "vertical");
    gameboard.receiveAttack([1, 1]);
    expect(ship.hits).toBe(1);
  });

  test("should record missed attacks", () => {
    gameboard.placeShip(ship, [2, 2], "vertical");
    gameboard.receiveAttack([0, 0]);

    expect(gameboard.missedAttacks).toContainEqual([0, 0]);
  });

  test("should return true for isAllSunk() if all ships are sunk", () => {
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    expect(gameboard.isAllSunk()).toBe(true);
  });

  test("should return false for isAllSunk() if not all ships are sunk", () => {
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.isAllSunk()).toBe(false);
  });
});

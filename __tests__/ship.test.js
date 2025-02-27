const Ship = require("../src/ship");

describe("ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test("should initialize with the given length and 0 hits", () => {
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
  });

  test("should increment hits when hit() is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("should return false for isSunk() if hits are less than length", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("should return true for isSunk() when hits equal ship length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

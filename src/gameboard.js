class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  // Place a ship on the board
  // startCoordinate: [x, y]
  // orientation: 'horizontal' or 'vertical'
  placeShip(ship, startCoordinate, orientation = "horizontal") {
    const [x, y] = startCoordinate;
    let coordinates = [];
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") coordinates.push([x, y + i]);
      else coordinates.push([x + i, y]);
    }
    this.ships.push({ ship, coordinates });
  }

  // Process an attack at a given coordinate
  receiveAttack(coordinate) {
    let hit = false;
    for (let placed of this.ships) {
      for (let coords of placed.coordinates) {
        if (coords[0] === coordinate[0] && coords[1] === coordinate[1]) {
          placed.ship.hit();
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (!hit) {
      this.missedAttacks.push(coordinate);
    }
  }

  // Check if all ships on the board have been sunk
  isAllSunk() {
    for (let placed of this.ships) {
      if (!placed.ship.isSunk()) return false;
    }
    return true;
  }

  // Helper function to return all ship coordinates for testing purposes
  getShipCoordinates() {
    let coords = [];
    for (let placed of this.ships) {
      for (let coord of placed.coordinates) {
        coords.push(coord);
      }
    }
    return coords;
  }
}

module.exports = GameBoard;

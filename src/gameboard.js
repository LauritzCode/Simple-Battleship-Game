class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(ship, startCoordinate, orientation = "horizontal") {
    const newCoordinates = this.getCoordinatesForShip(
      startCoordinate,
      ship.length,
      orientation
    );

    if (
      !this.areCoordinatesInBounds(newCoordinates) ||
      this.isCollision(newCoordinates)
    ) {
      return false;
    }
    this.ships.push({ ship, coordinates: newCoordinates });
    return true;
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
    return hit;
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

  reset() {
    this.ships = [];
    this.missedAttacks = [];
  }

  getCoordinatesForShip(
    startCoordinate,
    shipLength,
    orientation = "horizontal"
  ) {
    const [x, y] = startCoordinate;
    let coordinates = [];
    for (let i = 0; i < shipLength; i++) {
      if (orientation === "horizontal") {
        coordinates.push([x, y + i]);
      } else {
        coordinates.push([x + i, y]);
      }
    }
    return coordinates;
  }

  areCoordinatesInBounds(coordinates) {
    return coordinates.every(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);
  }

  isCollision(newCoordinates) {
    for (let placed of this.ships) {
      for (let coord of placed.coordinates) {
        for (let newCoord of newCoordinates) {
          if (coord[0] === newCoord[0] && coord[1] === newCoord[1]) {
            return true;
          }
        }
      }
    }
    return false;
  }

  isPlacementValid(ship, startCoordinate, orientation = "horizontal") {
    const newCoordinates = this.getCoordinatesForShip(
      startCoordinate,
      ship.length,
      orientation
    );
    return (
      this.areCoordinatesInBounds(newCoordinates) &&
      !this.isCollision(newCoordinates)
    );
  }
}
module.exports = GameBoard;

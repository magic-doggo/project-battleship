import { GameBoard } from "./game-board-class";
import { Ship } from "./ship-class";
import { firstDigit } from "./game-board-class";
import { lastDigit } from "./game-board-class";
//can use describe to group similar tests together

test('placeShip() vertically on a board', () => {
    let ship = { length: 3 }
    let gameBoard1 = new GameBoard;
    gameBoard1.placeShip(ship, [3, 3], 'vertical');
    expect(gameBoard1.boardArray[33]).toBe(1);
    expect(gameBoard1.boardArray[43]).toBe(1);
    expect(gameBoard1.boardArray[53]).toBe(1);
});

test('placeShip() horizontally on a board', () => {
    let ship = { length: 3 }
    let gameBoard1 = new GameBoard;
    gameBoard1.placeShip(ship, [3, 3], 'horizontal');
    expect(gameBoard1.boardArray[33]).toBe(1);
    expect(gameBoard1.boardArray[34]).toBe(1);
    expect(gameBoard1.boardArray[35]).toBe(1);
});

test('placeShip() vertically to return error since length is longer than space left', () => {
    let ship = { length: 8 };
    let gameBoard1 = new GameBoard;
    expect(() => {
        gameBoard1.placeShip(ship, [3, 3], 'vertical');
    }).toThrow('ship does not fit vertically');
});

test('placeShip() to return an array with the boardArray coordinates of the ship', () => {
    let ship = { length: 3 };
    let gameBoard1 = new GameBoard;
    expect(gameBoard1.placeShip(ship, [3, 3], 'vertical')).toEqual([33, 43, 53]);
});

test('receiveAttack() to place X on boardArray if a ship is hit on coordinates', () => {
    let gameBoard1 = new GameBoard;
    let ship = new Ship(3);
    gameBoard1.placeShip(ship, [3, 3], 'horizontal');
    gameBoard1.receiveAttack([3, 3]);
    expect(gameBoard1.boardArray[33]).toBe('x');
})

test('receiveAttack() to place 0 on boardArray if attack on coordinates misses', () => {
    let gameBoard1 = new GameBoard;
    gameBoard1.receiveAttack([3, 3]);
    expect(gameBoard1.boardArray[33]).toBe(0);
})

test('placeShip() to populate arrayOfPlacedShipObjects coordinates correctly', () => {
    let gameBoard1 = new GameBoard;
    let ship = { length: 3 };
    gameBoard1.placeShip(ship, [3, 3], 'horizontal');
    expect(gameBoard1.arrayOfPlacedShipObjects[0].coordinates).toEqual([33, 34, 35])

})

test('receiveAttack() to increase ship nrofhitstaken', () => {
    let gameBoard1 = new GameBoard;
    let ship = new Ship(3);
    gameBoard1.placeShip(ship, [3, 3], 'horizontal');
    gameBoard1.receiveAttack([3, 3]);
    expect(ship.nrOfHitsTaken).toBe(1);
})

test('placeShip to throw error if ship would overlap with another', () => {
    let gameBoard1 = new GameBoard;
    let ship = new Ship(3);
    let ship2 = new Ship(4);
    gameBoard1.placeShip(ship, [3, 3], 'horizontal');
    expect(() => {
        gameBoard1.placeShip(ship2, [2, 4], 'vertical');
    }).toThrow();
});

test('checkIfAllShipsSunk to return true if there are no ships standing', () => {
    let gameBoard1 = new GameBoard;
    let ship = new Ship(1);
    gameBoard1.placeShip(ship, [3, 3], 'vertical');
    gameBoard1.receiveAttack([3, 3]);
    expect(gameBoard1.checkIfAllShipsSunk()).toBe(true);
});

test('checkIfAllShipsSunk to return true if there are no ships standing', () => {
    let gameBoard1 = new GameBoard;
    let ship = new Ship(2);
    gameBoard1.placeShip(ship, [3, 3], 'vertical');
    gameBoard1.receiveAttack([3, 3]);
    expect(gameBoard1.checkIfAllShipsSunk()).toBe(false);
});

test('expect first digit of 30 to be 3', () => {
    expect(firstDigit(30)).toEqual(3);
});

test('expect second digit of 30 to be 0', () => {
    expect(lastDigit(30)).toBe(0);
});
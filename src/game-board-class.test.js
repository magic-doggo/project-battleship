import { GameBoard } from "./game-board-class";

//can use describe to group similar tests together

test('placeShip() vertically on a board', () => {
    let ship = { length: 3 }
    let gameBoard1 = new GameBoard;
    gameBoard1.placeShip(ship, [3, 3], "vertical");
    expect(gameBoard1.boardArray[33]).toBe(1);
    expect(gameBoard1.boardArray[43]).toBe(1);
    expect(gameBoard1.boardArray[53]).toBe(1);
});

test('placeShip() horizontally on a board', () => {
    let ship = { length: 3 }
    let gameBoard1 = new GameBoard;
    gameBoard1.placeShip(ship, [3, 3], "horizontal");
    expect(gameBoard1.boardArray[33]).toBe(1);
    expect(gameBoard1.boardArray[34]).toBe(1);
    expect(gameBoard1.boardArray[35]).toBe(1);
});

test('placeShip() vertically to return error since length is longer than space left', () => {
    let ship = { length: 8 }
    let gameBoard1 = new GameBoard;
    expect(() => {
        gameBoard1.placeShip(ship, [3, 3], "vertical");
    }).toThrow('ship does not fit vertically');
});

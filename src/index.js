import { Ship } from "./ship-class";
import { GameBoard } from "./game-board-class";
import { ComputerPlayer, Player } from "./player-class";

export let playerShip = new Ship(6, "playerShip");
let playerShip2 = new Ship(3, "playerShip2");
// console.log(playerShip);
// for (let i = 0; i < playerShip.length; i++) {
//     playerShip.hit();
// }

export let gameBoard1 = new GameBoard;
// console.log(gameBoard1.boardArray.length)
// let player = new Player;
// console.log(player);

// let computerPlayer = new ComputerPlayer;
// console.log(computerPlayer);

// console.log(playerShip.isSunk());

console.log(gameBoard1.placeShip(playerShip, [3,3], "horizontal"));
console.log(gameBoard1.placeShip(playerShip2, [6,2], "vertical"));

console.log(gameBoard1.placedShipsCoordinates);

console.log(gameBoard1.receiveAttack([3,3]));
console.log(gameBoard1.objectOfPlacedShips)
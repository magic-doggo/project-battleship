import { Ship } from "./ship-class";
import { GameBoard } from "./game-board-class";
import { ComputerPlayer, Player, HumanPlayer } from "./player-class";

export let playerShip = new Ship(6);
// let playerShip2 = new Ship(3);
// let playerShip3 = new Ship(3)

export let gameBoard1 = new GameBoard;

// console.log(gameBoard1.placeShip(playerShip, [3,3], "horizontal"));
// gameBoard1.placeShip(playerShip2, [6,2], "vertical");

gameBoard1.receiveAttack([3,3]);
// console.log(playerShip.nrOfHitsTaken)
// console.log(gameBoard1.arrayOfPlacedShipObjects)
// console.log(gameBoard1.placedShipsCoordinates)

// gameBoard1.placeShip(playerShip3, [2,4], "vertical");
console.log(gameBoard1.boardArray);
console.log("aaaaaaaaaas")

console.log(gameBoard1.checkIfAllShipsSunk());
let player1 = new HumanPlayer;
console.log(player1.playerBoard.boardArray.length)
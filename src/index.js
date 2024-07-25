import { Ship } from "./ship-class";
import { GameBoard } from "./game-board-class";
import { ComputerPlayer, Player } from "./player-class";

let playerShip = new Ship(3);
console.log(playerShip);
for (let i = 0; i < playerShip.length; i++) {
    playerShip.hit();
}

// let gameBoard1 = new GameBoard;
// console.log(gameBoard1)
// let player = new Player;
// console.log(player);

// let computerPlayer = new ComputerPlayer;
// console.log(computerPlayer);

console.log(playerShip.isSunk());
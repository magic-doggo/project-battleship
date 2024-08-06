import { Ship } from "./ship-class";
import { GameBoard } from "./game-board-class";
import { ComputerPlayer, Player, HumanPlayer } from "./player-class";
import './style.css';

let playerDestroyer = new Ship(2);
let playerSubmarine = new Ship(3);
let playerCruiser = new Ship(3);
let playerBattleship = new Ship(4);
let playerCarrier = new Ship(5);

let computerDestroyer = new Ship(2);
let computerSubmarine = new Ship(3);
let computerCruiser = new Ship(3);
let computerBattleship = new Ship(4);
let computerCarrier = new Ship(5);

let humanPlayer = new HumanPlayer;
let computerPlayer = new ComputerPlayer;

let humanBoard = document.getElementById('human-board');
let computerBoard = document.getElementById('computer-board');
humanPlayer.playerBoard.renderBoard(humanBoard, 'gridItem', 'humanGridItem');
computerPlayer.playerBoard.renderBoard(computerBoard, 'gridItem', 'computerGridItem');

function placeShips() {
    humanPlayer.playerBoard.placeShip(playerDestroyer, [0,0], 'vertical');
    humanPlayer.playerBoard.placeShip(playerSubmarine, [0,1], 'vertical');
    humanPlayer.playerBoard.placeShip(playerCruiser, [0,2], 'vertical');
    humanPlayer.playerBoard.placeShip(playerBattleship, [0,3], 'vertical');
    humanPlayer.playerBoard.placeShip(playerCarrier, [0,4], 'vertical');

    computerPlayer.playerBoard.placeShip(computerDestroyer, [5,0], 'horizontal');
    computerPlayer.playerBoard.placeShip(computerSubmarine, [6,0], 'horizontal');
    computerPlayer.playerBoard.placeShip(computerCruiser, [7,0], 'horizontal');
    computerPlayer.playerBoard.placeShip(computerBattleship, [8,0], 'horizontal');
    computerPlayer.playerBoard.placeShip(computerCarrier, [9,0], 'horizontal');
}
placeShips();

console.log(humanPlayer.playerBoard.boardArray);
console.log(computerPlayer.playerBoard.boardArray);

// humanPlayer.playerBoard.renderBoard(humanBoard, 'gridItem', 'humanGridItem');
// computerPlayer.playerBoard.renderBoard(computerBoard, 'gridItem', 'computerGridItem');
humanPlayer.playerBoard.receiveAttack([0,0]);
humanPlayer.playerBoard.updateBoard("humanGridItem");
computerPlayer.playerBoard.updateBoard("computerGridItem");


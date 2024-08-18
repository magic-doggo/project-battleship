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
humanPlayer.playerBoard.renderBoard(humanBoard, 'humanGridItem');
computerPlayer.playerBoard.renderBoard(computerBoard, 'computerGridItem');

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
// humanPlayer.playerBoard.receiveAttack([0,0]);
humanPlayer.playerBoard.updateBoard("humanGridItem");
computerPlayer.playerBoard.updateBoard("computerGridItem");

//maybe add form to allow player to place ship at coordinate?/
//choose vertical - south or horizontal - going east 
// make going south/east to be buttons/option to change them, unavailable first.
//based on ship length if they want ship to go other direction, could calculate and reuse existing placeship

//next:
// make players take turns
//make pc make random plays
//hide ship positions?


//can add function for start game/button
function startGame() {
    let playerCells = document.getElementsByClassName('humanGridItem');
    for (let i = 0; i < playerCells.length; i++) {
        playerCells[i].classList.add('yourTurn');
    }
}
startGame();



// humanPlayer.playerBoard.computerAttack([3,3]);

console.log(humanPlayer.playerBoard)


//either modify receiveAttack to support gameboard instance index
//or make new receiveAttackFromPc which uses gameboard instance index

//if I want to reuse OnCellClick, need to fake a click event
//perhaps it can be triggered at end of receiveAttack
//oncellclick also uses this. maybe do not use click events for pc
//after player picks pc cell, pc just picks random cell from player
//and runs special receiveattackfrompcautomatic
//fix eslint output tab: Config (unnamed): Key "plugins": This appears to be in eslintrc format (array of strings) rather than flat config format (object)

// console.log(humanPlayer.playerBoard.getRadomNotShotPlayerBoardCoordinate())



//WHY PLAYER BOARD NOTSHOTCOORDS NOT UPDATING
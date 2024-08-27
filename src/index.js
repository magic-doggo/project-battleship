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

//fix eslint output tab: Config (unnamed): Key "plugins": This appears to be in eslintrc format (array of strings) rather than flat config format (object)

let arrayOfPlayerShips = [playerDestroyer, playerSubmarine, playerCruiser, playerBattleship, playerCarrier];
let arrayOfComputerShips = [computerDestroyer, computerSubmarine, computerCruiser, computerBattleship, computerCarrier];

// humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
// computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);

// computerPlayer.playerBoard.updateBoard("computerGridItem");
// humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");

//do I want player/computer to shoot again if they landed a hit?

const shufflePlayerShipsButton = document.getElementById('shuffle-board');
shufflePlayerShipsButton.addEventListener('click', () => {
    humanPlayer.playerBoard.boardArray = new Array(100);
    humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
    humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");

    computerPlayer.playerBoard.boardArray = new Array(100);
    computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);
    computerPlayer.playerBoard.updateBoard("computerGridItem");
});

//make game start without ships? or have button to place ships manually
//drag ship to spot
//make function to check if spot is valid
//placeship at location

//maybe update renderBoard to add event listener for drop?
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event

//how to know ship and direction in rederboard, before dragevent is started?
//or move it all to different method/module

let dragged = null;
let playerDestroyerDiv = document.getElementById('playerDestroyer');
playerDestroyerDiv.addEventListener('dragstart', (event) => {
    dragged = event.target;
    console.log(dragged.id);
    console.log(dragged.childElementCount)
})
console.log(playerDestroyerDiv)

let playerGridItems = document.getElementsByClassName('humanGridItem');
// for (let playerGridItem of playerGridItems) {
//     console.log(indexo)
//     playerGridItem.addEventListener('drop', (event) => {
//         event.preventDefault();
//         if (event.target.className === 'humanGridItem') {
//             let ship;
//             // this.placeShip(ship, i, direction) //define ship and direction each time for each ship?
//             console.log(this, " this");
//             console.log(event.target);
//             if (dragged.id == 'playerDestroyer') {
//                 ship = playerDestroyer;
//             }
//             GameBoard.gameBoardClassInstances[0].placeShip(ship, 3, 'vertical')
//             humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");
//         }
//     })
// }

for (let i = 0; i < playerGridItems.length; i++) {
    playerGridItems[i].addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.className === 'humanGridItem') {
            let ship;
            // this.placeShip(ship, i, direction) //define ship and direction each time for each ship?
            console.log(this, " this");
            console.log(event.target);
            if (dragged.id == 'playerDestroyer') {
                ship = playerDestroyer;
            }
            GameBoard.gameBoardClassInstances[0].placeShip(ship, i, 'vertical')
            humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");
        }
    })
}

// let 
let flipShipDirButton = document.getElementById('ships-direction');
flipShipDirButton.addEventListener('click', () => {
    let draggableShips = document.getElementsByClassName('draggableShip');
    for (let i = 0; i < draggableShips.length; i++) {
        draggableShips[i].classList.toggle('draggableShipVertical');
    }
})


//make button to change orientation of ships in box: vertical or horizontal
//depending on current orientation, use this as 'direction' in placeship
//have ways to check dragged.id for all ships, not repetitive if possible

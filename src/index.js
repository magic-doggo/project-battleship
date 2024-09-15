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

humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);
humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");


const shufflePlayerShipsButton = document.getElementById('shuffle-board');
shufflePlayerShipsButton.addEventListener('click', () => {
    humanPlayer.playerBoard.resetGame();
    humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
    humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");

    computerPlayer.playerBoard.resetGame();
    computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);
    computerPlayer.playerBoard.updateBoard("computerGridItem");

    let draggableShips = document.getElementsByClassName('draggableShip');
    for (let i = 0; i < draggableShips.length; i++) {
        draggableShips[i].style.visibility = 'hidden';
    }
});

const startNewGameButton = document.getElementById('empty-board');
startNewGameButton.addEventListener('click', () => {
    computerPlayer.playerBoard.resetGame();
    computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);
    computerPlayer.playerBoard.updateBoard("computerGridItem");

    humanPlayer.playerBoard.resetGame();
    humanPlayer.playerBoard.updateBoard("humanGridItem");

    let draggableShips = document.getElementsByClassName('draggableShip');
    for (let i = 0; i < draggableShips.length; i++) {
        draggableShips[i].style.visibility = 'visible';
    }
    for (let cell of playerGridItems) cell.classList.remove('yourTurn');
    document.getElementById('boards-container').classList.remove('yourTurn');
});

let dragged = null;
let playerDestroyerDiv = document.getElementById('playerDestroyer');
let playerSubmarineDiv = document.getElementById('playerSubmarine');
let playerCruiserDiv = document.getElementById('playerCruiser');
let playerBattleshipDiv = document.getElementById('playerBattleship');
let playerCarrierDiv = document.getElementById('playerCarrier');
let arrayOfShipsDivs = [playerDestroyerDiv,playerSubmarineDiv, playerCruiserDiv, playerBattleshipDiv, playerCarrierDiv];

for (let ship of arrayOfShipsDivs) {
    ship.addEventListener('dragstart', (event)=> {
        dragged=event.target;
    })
}
let playerGridItems = document.getElementsByClassName('humanGridItem');

let direction = 'horizontal';
for (let i = 0; i < playerGridItems.length; i++) {
    playerGridItems[i].addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.className === 'humanGridItem') {
            let ship;
            if (dragged.id == 'playerDestroyer') {
                ship = playerDestroyer;
            } else if (dragged.id == 'playerSubmarine') {
                ship = playerSubmarine;
            } else if (dragged.id == 'playerCruiser') {
                ship = playerCruiser;
            } else if (dragged.id == 'playerBattleship') {
                ship = playerBattleship;
            } else if (dragged.id == 'playerCarrier') {
                ship = playerCarrier;
            }
            while (clickedShipCell > 1) {
                if (direction == 'horizontal') {
                    i --;
                    clickedShipCell--;
                } else {
                    i = i - 10;
                    clickedShipCell--;
                }
            }
            if (i < 0) throw new Error ('Part of ship is off Board');
            humanPlayer.playerBoard.placeShip(ship, i, direction);
            humanPlayer.playerBoard.updateBoard('humanGridItem');
        }
        dragged.style.visibility = 'hidden';
        if (humanPlayer.playerBoard.arrayOfPlacedShipObjects.length >= 5) {
            humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack('humanGridItem')
        }
    })
}

let flipShipDirButton = document.getElementById('ships-direction');
flipShipDirButton.addEventListener('click', () => {
    let draggableShips = document.getElementsByClassName('draggableShip');
    for (let i = 0; i < draggableShips.length; i++) {
        draggableShips[i].classList.toggle('draggableShipVertical');
    }
    if (direction === 'horizontal') direction = 'vertical';
    else direction = 'horizontal';
})

let clickedShipCell;
let playerShipCells = document.getElementsByClassName('shipBlock');
for (let shipCell of playerShipCells) {
    shipCell.addEventListener('mousedown', (event) => {
        clickedShipCell = shipCell.classList[1];
    })
}
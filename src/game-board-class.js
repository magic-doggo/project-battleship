export class GameBoard {
    constructor() {
        this.boardArray = new Array(100);
        // x   0     1     2        9
        // 0 [0,0] [0,1] [0,2] .. [0,9]
        // 1 [1,0] [1,1] [1,2]
        // 2 [2,0] [2,1] [2,2]
        // ...
        // 9 [9,0] [9,1] [9,2] .. [9,9]
        // this.placedShipsCoordinates = []; //iterate through this when ship is hit? not used atm
        // this.hitCoordinates = []; //no functionality relies on this yet
        // this.missedCoordinates = []; //no functionality relies on this yet
        this.notShotCoordinates = this.createIndexArray(99); //creates array with val from 0 to 99
        this.arrayOfPlacedShipObjects = []; 
    }

    static isPlayer1Turn = true;

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right
    placeShip(ship, coordinates, direction) {
        let arrayCoords = (coordinates[0] * 10) + coordinates[1];
        let tempArray = [];
        let tempShipObject = {};
        for (let i = 0; i < ship.length; i++) {
            if (direction == "vertical") {
                if (coordinates[0] + ship.length >= 10) throw new Error('ship does not fit vertically'); //fix this so it does not run every iteration
                //increase by 10 when row changes (vertical changes)
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps vertically with another at index ${arrayCoords}`);
                }
                tempArray.push(arrayCoords);
                arrayCoords += 10;
            } else if (direction == "horizontal") {
                if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps horizontally with another at index ${arrayCoords}`)
                };
                //increase by 1 when column changes (horizontal changes)
                tempArray.push(arrayCoords);
                arrayCoords += 1;
            }
        }
        // this.placedShipsCoordinates.push(tempArray); //not going to use placedshipscoordinates?

        tempShipObject.coordinates = tempArray;
        tempShipObject.shipInstance = ship;
        this.arrayOfPlacedShipObjects.push(tempShipObject);

        for (let coordinate of tempArray) {
            this.boardArray[coordinate] = 1;
        }
        return tempArray;
    }

    receiveAttack(coordinates) {
        let attackedArrayCoords = (coordinates[0] * 10) + coordinates[1];
        if (this.boardArray[attackedArrayCoords] == 1) {
            this.boardArray[attackedArrayCoords] = "x"; //place x on board if ship is hit
            // this.hitCoordinates.push(attackedArrayCoords);
            let index = this.notShotCoordinates.indexOf(attackedArrayCoords);
            this.notShotCoordinates.splice(index, 1);

            for (let ship of this.arrayOfPlacedShipObjects) {
                for (let coordinate of ship.coordinates) {
                    if (coordinate === attackedArrayCoords) {
                        ship.shipInstance.hit();
                    }
                }
            }

        } else if (this.boardArray[attackedArrayCoords] == undefined) {
            this.boardArray[attackedArrayCoords] = 0; //place 0 on board if attack missed
            // this.missedCoordinates.push(attackedArrayCoords);
            let index = this.notShotCoordinates.indexOf(attackedArrayCoords);
            this.notShotCoordinates.splice(index, 1);
        }
        else if (this.boardArray[attackedArrayCoords] == "x" || this.boardArray[attackedArrayCoords] == 0) {
            throw new Error(`You have already attacked ${coordinates} before, try a different spot`);
        }
        else throw new Error('Not a valid coordinate') //can make it check of coordinate exists in boardArray, but not needed?
        //swap player turn? edit later 100
        console.log(this.notShotCoordinates);
        return `Turn of `
    }

    checkIfAllShipsSunk() {
        if (this.boardArray.includes(1)) return false;
        return true;
    }

    renderBoard(boardContainer, specificPlayerGridClass) {
        for (let i = 0; i < this.boardArray.length; i++) {
            let gridItem = document.createElement('div');
            boardContainer.appendChild(gridItem);
            gridItem.classList.add(specificPlayerGridClass);
            if (i < 10) {
                let firstIndex = 0;
                let secondIndex = firstDigit(i)
                let [a, b] = [firstIndex, secondIndex];
                gridItem.addEventListener('click', (event) => {
                    this.onCellClick([a, b], event);
                });
            } else {
                let firstIndex = firstDigit(i);
                let secondIndex = lastDigit(i);
                let [a, b] = [firstIndex, secondIndex];
                gridItem.addEventListener('click', (event) => {
                    this.onCellClick([a, b], event);
                });
            }
        }
    }

    updateBoard(specificPlayerGridClass) { //maybe do not need player specific class param, since method is ran on 1 player board anyway
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //clear the board visually
        for (let i = 0; i < this.boardArray.length; i++) {
            childDivs[i].innerText = "";
        }
        //repopulate the board visually with new location of ships and hits
        for (let i = 0; i < this.boardArray.length; i++) {
            if (this.boardArray[i] == 1) {
                childDivs[i].innerText = 'ship';
            } else if (this.boardArray[i] == 'x') {
                childDivs[i].innerText = 'hit';
            } else if (this.boardArray[i] == 0) {
                childDivs[i].innerText = 'miss';
            }
        }
    }

    onCellClick(coordinates, event) {
        console.log(coordinates);
        let currentlyHiddenCells = document.querySelectorAll('.yourTurn');
        let classesOfGridItem = event.target.className.split(' ');
        let firstClassesOfGridItem = classesOfGridItem[0];
        this.receiveAttack(coordinates);
        this.updateBoard(firstClassesOfGridItem);
        let cellsOnClickedBoard = document.getElementsByClassName(firstClassesOfGridItem);
        currentlyHiddenCells.forEach(cell => {
            cell.classList.remove('yourTurn');
        });
        for (let i = 0; i < cellsOnClickedBoard.length; i++) {
            cellsOnClickedBoard[i].classList.toggle('yourTurn');
        };
        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            document.getElementById('player-turn').style.visibility = 'visible';
        }
        // console.log(GameBoard.isPlayer1Turn);
    }

    computerAttack(coordinates) { //only relevant when playing against pc
        this.receiveAttack(coordinates); 
        this.updateBoard('humanGridItem');

        //selects computer cells
        let currentlyHiddenCells = document.querySelectorAll('.yourTurn');
        //selects human player cells
        let humanPlayerCells = document.getElementsByClassName('humanGridItem');
        //makes computer cells interactive (useful after pc turn ends)
        currentlyHiddenCells.forEach(cell => {
            cell.classList.remove('yourTurn');
        });
        //makes human player cells unintaractive (since after pc shoots, human will need to shoot only pc board)
        for (let i = 0; i < humanPlayerCells.length; i++) {
            humanPlayerCells[i].classList.toggle('yourTurn');
        };
        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            document.getElementById('player-turn').style.visibility = 'visible';
        }
    }

    createIndexArray(n) {   
        let newArr = [];
        for (let i = 0; i <= n; i++) {
            newArr.push(i);
        } 
        return newArr;  
    }
}

export function firstDigit(n) { //use to get 1st index digit and convert too 1st coordinate
    while (n >= 10) n /= 10;
    return Math.floor(n)
}

export function lastDigit(n) { //use to get 2nd idex digit and convert to 2nd coordinate
    return Math.floor(n % 10);
}
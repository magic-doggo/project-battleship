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
        GameBoard.gameBoardClassInstances.push(this);
    }

    static isPlayer1Turn = true;
    static gameBoardClassInstances = [];

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right
    // placeShipOLd(ship, coordinates, direction) {
    //     let arrayCoords = coordinates;
    //     if (typeof coordinates == 'object') {
    //         arrayCoords = (coordinates[0] * 10) + coordinates[1];
    //     }
    //     console.log(arrayCoords);
    //     let tempArray = [];
    //     let tempShipObject = {};
    //     for (let i = 0; i < ship.length; i++) {
    //         if (direction == "vertical") {
    //             if (coordinates[0] + ship.length >= 10) throw new Error('ship does not fit vertically'); //fix this so it does not run every iteration
    //             //increase by 10 when row changes (vertical changes)
    //             if (this.boardArray[arrayCoords] != undefined) {
    //                 tempArray = [];
    //                 throw new Error(`ship overlaps vertically with another at index ${arrayCoords}`);
    //             }
    //             tempArray.push(arrayCoords);
    //             arrayCoords += 10;
    //             if (arrayCoords >= 100) console.log(arrayCoords, ' arraycoords vert');
    //         } else if (direction == "horizontal") {
    //             if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
    //             if (this.boardArray[arrayCoords] != undefined) {
    //                 tempArray = [];
    //                 throw new Error(`ship overlaps horizontally with another at index ${arrayCoords}`)
    //             };
    //             //increase by 1 when column changes (horizontal changes)
    //             tempArray.push(arrayCoords, ' arraycoords horiz');
    //             arrayCoords += 1;
    //             if (arrayCoords >= 100) console.log(arrayCoords);
    //         }
    //     }
    //     // this.placedShipsCoordinates.push(tempArray); //not going to use placedshipscoordinates?

    //     tempShipObject.coordinates = tempArray;
    //     tempShipObject.shipInstance = ship;
    //     this.arrayOfPlacedShipObjects.push(tempShipObject);

    //     for (let coordinate of tempArray) {
    //         this.boardArray[coordinate] = 1;
    //     }
    //     console.log(this);
    //     console.log(tempArray , " temparray");
    //     return tempArray;
    // }

    placeShip(ship, coordinates, direction) {
        let arrayCoords = coordinates;
        if (typeof coordinates == 'object') {
            arrayCoords = (coordinates[0] * 10) + coordinates[1];
        }
        let tempArray = [];
        let tempShipObject = {};
        let coordinatesAsArrayValues;
        if (arrayCoords < 10) {
            let firstIndex = 0;
            let secondIndex = firstDigit(arrayCoords)
            coordinatesAsArrayValues = [firstIndex, secondIndex];
        } else {
            let firstIndex = firstDigit(arrayCoords);
            let secondIndex = lastDigit(arrayCoords);
            coordinatesAsArrayValues = [firstIndex, secondIndex];
        };
        for (let i = 0; i < ship.length; i++) {
            if (direction == "vertical") {
                if (coordinatesAsArrayValues[0] + ship.length >= 10) throw new Error('ship does not fit vertically'); //fix this so it does not run every iteration
                //increase by 10 when row changes (vertical changes)
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps vertically with another at index ${arrayCoords}`);
                }
                tempArray.push(arrayCoords);
                arrayCoords += 10;
                if (arrayCoords >= 100) console.log(arrayCoords, ' arraycoords vert');
            } else if (direction == "horizontal") {
                if (coordinatesAsArrayValues[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps horizontally with another at index ${arrayCoords}`)
                };
                //increase by 1 when column changes (horizontal changes)
                tempArray.push(arrayCoords);
                arrayCoords += 1;
                if (arrayCoords >= 100) console.log(arrayCoords);
            }
        }
        // this.placedShipsCoordinates.push(tempArray); //not going to use placedshipscoordinates?

        tempShipObject.coordinatesAsArrayValues = tempArray;
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
                for (let coordinate of ship.coordinatesAsArrayValues) {
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
        // if (this.checkIfAllShipsSunk()) document.getElementById('winner').innerText = 'Player Won';
        // return `Turn of `
    }

    checkIfAllShipsSunk() {
        if (!GameBoard.gameBoardClassInstances[0].boardArray.includes(1)) return true;
        else if (!GameBoard.gameBoardClassInstances[1].boardArray.includes(1)) return true;
        return false;
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
            gridItem.addEventListener('dragover', (event) => {
                //prevent default to allow drop
                event.preventDefault();
            })
        }
    }

    updateBoard(specificPlayerGridClass) { //maybe do not need player specific class param, since method is ran on 1 player board anyway
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //Update the board visually with current location of ships/hits/nothings
        for (let i = 0; i < this.boardArray.length; i++) {
            if (this.boardArray[i] == 1) {
                //keep computer ships hidden
                //updatePlayerBoardAfterPcAttack() is used on the player board, which does show ship location
                //this solution sucks, find one without specifying a predefined class name?
                if (specificPlayerGridClass == 'humanGridItem') childDivs[i].innerText = 'ship';
                else childDivs[i].innerText = '';
            } else if (this.boardArray[i] == 'x') {
                childDivs[i].innerText = 'hit';
            } else if (this.boardArray[i] == 0) {
                childDivs[i].innerText = 'miss';
            } else {
                childDivs[i].innerText = "";
            }
        }

        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            // document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            // document.getElementById('player-turn').style.visibility = 'visible';
        };
    }

    onCellClick(coordinates, event) {//move dom changes to updateBoard method later?
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
        // if (GameBoard.isPlayer1Turn === true) {
        //     GameBoard.isPlayer1Turn = false;
        //     document.getElementById('player-turn').style.visibility = 'hidden';
        // } else {
        //     GameBoard.isPlayer1Turn = true;
        //     document.getElementById('player-turn').style.visibility = 'visible';
        // };
        // console.log(GameBoard.gameBoardClassInstances[0].boardArray);
        // console.log(GameBoard.gameBoardClassInstances[1].boardArray, "  computer");
        if (this.checkIfAllShipsSunk()) {
            document.getElementById('winner').innerText = 'Player 1 Won';
            document.getElementById('boards-container').classList.add('yourTurn');
        }
        else GameBoard.gameBoardClassInstances[0].receiveAttackFromPc(GameBoard.gameBoardClassInstances[0].getRadomNotShotPlayerBoardCoordinate)     
    }

    createIndexArray(n) {
        let newArr = [];
        for (let i = 0; i <= n; i++) {
            newArr.push(i);
        }
        return newArr;
    }

    receiveAttackFromPc(randomCoordFunction) {
        //is storing logs to a different class instance in each class instance cheating? GameBoard.gameBoardClassInstances[0]
        //since we only interact with pc board via dom, pc GameBoard instance can through this interact with player GameBoard instance
        let coordinates = randomCoordFunction();
        if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == 1) {
            GameBoard.gameBoardClassInstances[0].boardArray[coordinates] = "x"; //place x on board if ship is hit
            // GameBoard.gameBoardClassInstances[0].hitCoordinates.push(coordinates);
            let index = GameBoard.gameBoardClassInstances[0].notShotCoordinates.indexOf(coordinates);
            GameBoard.gameBoardClassInstances[0].notShotCoordinates.splice(index, 1);
            for (let ship of GameBoard.gameBoardClassInstances[0].arrayOfPlacedShipObjects) {
                for (let coordinate of ship.coordinatesAsArrayValues) {
                    if (coordinate === coordinates) {
                        ship.shipInstance.hit();
                    }
                }
            }
        } else if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == undefined) {
            GameBoard.gameBoardClassInstances[0].boardArray[coordinates] = 0; //place 0 on board if attack missed
            // GameBoard.gameBoardClassInstances[0].missedCoordinates.push(coordinates);
            let index = GameBoard.gameBoardClassInstances[0].notShotCoordinates.indexOf(coordinates);
            GameBoard.gameBoardClassInstances[0].notShotCoordinates.splice(index, 1);
        } else if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == "x" || GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == 0) {
            throw new Error(`You have already attacked ${coordinates} before, try a different spot`);
        } else throw new Error('Not a valid coordinate') //can make it check of coordinate exists in boardArray, but not needed?
        GameBoard.gameBoardClassInstances[0].updatePlayerBoardAfterPcAttack('humanGridItem');
        if (this.checkIfAllShipsSunk()) {
            document.getElementById('winner').innerText = 'Computer Won';
            document.getElementById('boards-container').classList.add('yourTurn');
            // document.getElementById('player-turn').style.visibility = 'hidden';
        }
    }

    getRadomNotShotPlayerBoardCoordinate() {
        return GameBoard.gameBoardClassInstances[0].notShotCoordinates[(Math.floor(Math.random() * GameBoard.gameBoardClassInstances[0].notShotCoordinates.length))]
    }

    updatePlayerBoardAfterPcAttack(specificPlayerGridClass) { //I could just use updatePlayerBoard and stop using "this."? Alternate player boards based on isPlayer1Turn?
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //Update the board visually with current location of ships/hits/nothings
        for (let i = 0; i < GameBoard.gameBoardClassInstances[0].boardArray.length; i++) {
            if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 1) {
                childDivs[i].innerText = 'ship';
            } else if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 'x') {
                childDivs[i].innerText = 'hit';
            } else if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 0) {
                childDivs[i].innerText = 'miss';
            } else childDivs[i].innerText = "";
        }
        let currentlyHiddenCells = document.querySelectorAll('.yourTurn');
        let cellsOnClickedBoard = document.getElementsByClassName(specificPlayerGridClass);
        currentlyHiddenCells.forEach(cell => {
            cell.classList.remove('yourTurn');
        });
        for (let i = 0; i < cellsOnClickedBoard.length; i++) {
            cellsOnClickedBoard[i].classList.toggle('yourTurn');
        };
        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            // document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            // document.getElementById('player-turn').style.visibility = 'visible';
        }
    }

    getRandomShipDirection() {
        let shipDirections = ['vertical', 'horizontal'];
        return shipDirections[Math.floor(Math.random() * shipDirections.length)];
    }

    placeShipsRandomly(arrayOfPlayerShips, player) {
        let coordArray = this.createIndexArray(99);
        for (let ship of arrayOfPlayerShips) {
            let potentialShipCoords = [];
            while (potentialShipCoords[0] == undefined) {
                let coords = Math.floor(Math.random() * coordArray.length);
                try {
                    potentialShipCoords = player.playerBoard.placeShip(ship, coords, this.getRandomShipDirection());
                } catch (error) {
                    console.log(coords);
                }
            }
        }
    }
}

//should these be class methods too? used in the GameBoard class but not exactly connected, just helper functions
//project requirement is not to have global functions
export function firstDigit(n) { //use to get 1st index digit and convert too 1st coordinate
    while (n >= 10) n /= 10;
    return Math.floor(n)
}

export function lastDigit(n) { //use to get 2nd idex digit and convert to 2nd coordinate
    return Math.floor(n % 10);
}
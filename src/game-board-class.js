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
        this.hitCoordinates = []; //no functionality relies on this yet
        this.missedCoordinates = [];
        this.arrayOfPlacedShipObjects = []; //no functionality relies on this yet
    }

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
            this.hitCoordinates.push(attackedArrayCoords);
            for (let ship of this.arrayOfPlacedShipObjects) {
                for (let coordinate of ship.coordinates) {
                    if (coordinate === attackedArrayCoords) {
                        ship.shipInstance.hit();
                    }
                }
            }

        } else if (this.boardArray[attackedArrayCoords] == undefined) {
            this.boardArray[attackedArrayCoords] = 0; //place 0 on board if attack missed
            this.missedCoordinates.push(attackedArrayCoords);
        }
    }

    checkIfAllShipsSunk() {
        if (this.boardArray.includes(1)) return false;
        return true;
    }

    renderBoard(boardContainer, generalGridClass, specificPlayerGridClass) {
        for (let cell of this.boardArray) {
            let gridItem = document.createElement('div');
            boardContainer.appendChild(gridItem);
            gridItem.classList.add(generalGridClass);
            gridItem.classList.add(specificPlayerGridClass);
            // return childDivs = document.getElementsByClassName(specificPlayerGridClass);
        }
    }

    updateBoard(specificPlayerGridClass) {
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //clear the board visually
        for (let i = 0; i < this.boardArray.length; i++) {
            childDivs[i].innerText = "";
        }
        for (let i = 0; i < this.boardArray.length; i++) {
            if (this.boardArray[i] == 1) {
                childDivs[i].innerText = "ship";
            }
        }
    }
}

// function firstDigit(n) { //if I need to convert array index to coordiante
//     while (n >= 10) n / 10;
//     return Math.floor(n)
// }

// function lastDigit(n) {
//     return Math.floor(n % 10);
// }
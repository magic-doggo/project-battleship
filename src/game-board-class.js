import { Ship } from "./ship-class";
import { Player } from "./player-class";
import { gameBoard1 } from ".";
import { playerShip } from ".";

export class GameBoard {
    constructor() {
        this.boardArray = new Array(100);
        // x   0     1     2        9
        // 0 [0,0] [0,1] [0,2] .. [0,9]
        // 1 [1,0] [1,1] [1,2]
        // 2 [2,0] [2,1] [2,2]
        // ...
        // 9 [9,0] [9,1] [9,2] .. [9,9]
        this.placedShipsCoordinates = []; //iterate through this when ship is hit?
        this.hitCoordinates = [];
        this.missedCoordinates = [];
        this.objectOfPlacedShips = {};

    }

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right?
    placeShip(ship, coordinates, direction) {
        let arrayCoords = (coordinates[0] * 10) + coordinates[1];
        let tempArray = [];
        let tempShipObject = {};
        for (let i = 0; i < ship.length; i++) {
            if (direction == "vertical") {
                if (coordinates[0] + ship.length >= 10) throw new Error('ship does not fit vertically');
                this.boardArray[arrayCoords] = 1; 
                //increase by 10 when row changes (vertical changes)
                tempArray.push(arrayCoords)
                arrayCoords += 10;
            } else if (direction == "horizontal") {
                if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                //increase by 1 when column changes (horizontal changes)
                this.boardArray[arrayCoords] = 1;
                tempArray.push(arrayCoords)
                arrayCoords += 1;
            }
        } //make a way to prevent adding ship if any of the cells overlap with other ships
        //maybe a different function so it does not get too big? e.g. areArrayElemsEmpty()
        this.placedShipsCoordinates.push(tempArray);
        this.objectOfPlacedShips[ship.name] = tempArray;
        //i can get ship name from parameter, let's store that in the class instance?
        //maybe I can't get ship name from parameter? Maybe deduce ship name based on array length?
        //cannot do that unless I do not accept ships with same length
        //maybe create the ship instance inside the placeShip method? have parameter for lenght and create based on that?
        // console.log(ship);
        return tempArray;
    }

    receiveAttack(coordinates) {
        let attackedArrayCoords = (coordinates[0]*10) + coordinates[1];
        // console.log(this.boardArray[attackedArrayCoords]);
        if (this.boardArray[attackedArrayCoords] == 1) {
            this.boardArray[attackedArrayCoords] = "x"; //place x on board if ship is hit
            // ship.hit()
            this.hitCoordinates.push(attackedArrayCoords);
            
            for (let ship in this.objectOfPlacedShips) {
                console.log(this.objectOfPlacedShips[ship]);
                for (let coordinate of this.objectOfPlacedShips[ship]) {
                    if (coordinate === attackedArrayCoords) {
                        // console.log(ship);
                        ship.hit();
                    }
                }
            }
        } else if (this.boardArray[attackedArrayCoords] == undefined) {
            this.boardArray[attackedArrayCoords] = 0; //place 0 on board if attack missed
            this.missedCoordinates.push(attackedArrayCoords);
        }
    }

    checkIfAllShipsSunk() {

    }
}

export class GameBoard {
    constructor() {

        this.boardArray = new Array(100);
        // x   0     1     2        9
        // 0 [0,0] [0,1] [0,2] .. [0,9]
        // 1 [1,0] [1,1] [1,2]
        // 2 [2,0] [2,1] [2,2]
        // ...
        // 9 [9,0] [9,1] [9,2] .. [9,9]
        this.placedShipsCoordinates = [];
        this.hitCoordinates = [];
        this.missedCoordinates = [];
    }

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right?
    placeShip(ship, coordinates, direction) {
        let arrayCoords = (coordinates[0] * 10) + coordinates[1];
        let tempArray = [];
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
        }
        this.placedShipsCoordinates.push(tempArray);
        return tempArray;
    }

    receiveAttack(coordinates) {
        let arrayCoords = (coordinates[0]*10) + coordinates[1];
        if (this.boardArray[arrayCoords] == 1) {
            this.boardArray[arrayCoords] = "x"; //place x on board if ship is hit
            // ship.hit()
            this.hitCoordinates.push(arrayCoords);
        } else if (this.boardArray[arrayCoords] == undefined) {
            this.boardArray[arrayCoords] = 0; //place 0 on board if attack missed
            this.missedCoordinates.push(arrayCoords);
        }
    }
}

export class GameBoard {
    constructor() {

        this.boardArray = new Array(100);
        // x   0     1     2
        // 0 [0,0] [0,1] [0,2]
        // 1 [1,0] [1,1] [1,2]
        // 2 [2,0] [2,1] [2,2]
        this.placedShipsCoordinates = [];
        this.hitCoordinates = [];
    }

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right?
    placeShip(ship, coordinates, direction) {
        let arrayCoords = (coordinates[0] * 10) + coordinates[1];
        for (let i = 0; i < ship.length; i++) {
            if (direction == "vertical") {
                if (coordinates[0] + ship.length >= 10) throw new Error('ship does not fit vertically');
                this.boardArray[arrayCoords] = 1; 
                //increase by 10 when row changes (vertical changes)
                arrayCoords += 10;
            } else if (direction == "horizontal") {
                if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                //increase by 1 when column changes (horizontal changes)
                this.boardArray[arrayCoords] = 1;
                arrayCoords += 1;
            }
        }
    }

    receivedAttack(coordinates) {
    //     let arrayCoords = (coordinates[0]*10) + coordinates[1];
    //     if (this.boardArray[arrayCoords] == 1) {
    //         this.boardArray[arrayCoords = "x"];
    //         // ship.hit()
    //     }
    }
}

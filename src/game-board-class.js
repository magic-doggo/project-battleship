export class GameBoard {
    constructor() {
        // this.columns = new Array(10);
        // this.rows = new Array(10);
        this.boardArray = new Array(100);
        // this.board = this.createBoard(); //need to know if a square is hit or not. maybe each cell is an array or an object saying if empty/ship/hit
        //or maybe have board as an array of 100 zeroes, and change to 1 if ship is placed, 2 if 
        //do I even need values inside cells? just create 10 columns arrays, each with 10 empty values for cells
        // x   0     1     2
        // 0 [0,0] [0,1] [0,2]
        // 1 [1,0] [1,1] [1,2]
        // 2 [2,0] [2,1] [2,2]
        this.placedShipsCoordinates = [];
        this.hitCoordinates = [];
    }

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right? if not after +length not between 0-9, not valid
    placeShip(ship, coordinates, direction) {
        let arrayCoords = (coordinates[0] * 10) + coordinates[1];
        this.boardArray[arrayCoords] = 1; //1 = ship exists there
        for (let i = 1; i < ship.length; i++) {
            if (direction == "vertical") {
                //increase by 10 when row changes (vertical changes)
                arrayCoords += 10;
                this.boardArray[arrayCoords] = 1; 
            } else if (direction == "horizontal") {
                //increase by 1 when column changes (horizontal changes)
                arrayCoords += 1;
                this.boardArray[arrayCoords] = 1;
            }
        }
    }

    receivedAttack(coordinates) {
        //ship.hit if hit
        //or record coordinates of hit
    }
}

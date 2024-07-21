export class GameBoard {
    constructor() {
        this.columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.board = this.createBoard();
    }

    createBoard() {
        let board = [];
        for (let row of this.rows) {
            for (let column of this.columns) {
                let cell = column+row;
                board.push(cell);
            }
        }
        return board;

    }

    placeShip() {

    }

    receivedAttack(coordinates) {
        //ship.hit if hit
        //or record coordinates of hit
    }
}
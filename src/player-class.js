import { GameBoard } from "./game-board-class"

export class Player {
    constructor() {
        this.playerBoard = new GameBoard;
    }

};

export class HumanPlayer extends Player {
    constructor() {
        super();
        this.playerType = "human";
    }
}

export class ComputerPlayer extends Player {
    constructor() {
        super();
        this.playerType = "computer";
    }
}
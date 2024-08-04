import { ComputerPlayer, HumanPlayer } from "./player-class"

test('Player subclasses create gameboard array length 100 successfully ', () => {
    let player1 = new HumanPlayer;
    expect(player1.playerBoard.boardArray.length).toBe(100);
})

test('Player type to be human ', () => {
    let player1 = new HumanPlayer;
    expect(player1.playerType).toBe("human");
})

test('Player type to be computer ', () => {
    let player1 = new ComputerPlayer;
    expect(player1.playerType).toBe("computer");
})
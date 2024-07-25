import { Ship } from "./ship-class";

let ship = new Ship;

test('ship hit() method to increase nr of hits taken to 1', () => {
    // let ship = new Ship(4);
    expect(ship.hit()).toBe(1);
})

test('ship hit() method to increase nr of hits taken to 2', () => {
    // let ship = new Ship(4);
    expect(ship.hit()).toBe(2);
})

test('ship isSunk() method to change to true if nrOfHitsTaken exceeds/equals ship length', () => {
    let ship = new Ship(3);
    for (let i = 0; i < ship.length; i++) {
        ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
})
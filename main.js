/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game-board-class.js":
/*!*********************************!*\
  !*** ./src/game-board-class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
class GameBoard {
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
                    throw new Error (`ship overlaps vertically with another at index ${arrayCoords}`);
                }
                tempArray.push(arrayCoords);
                arrayCoords += 10;
            } else if (direction == "horizontal") {
                if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error (`ship overlaps horizontally with another at index ${arrayCoords}`)
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
}


/***/ }),

/***/ "./src/player-class.js":
/*!*****************************!*\
  !*** ./src/player-class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer),
/* harmony export */   HumanPlayer: () => (/* binding */ HumanPlayer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _game_board_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board-class */ "./src/game-board-class.js");


class Player {
    constructor() {
        this.playerBoard = new _game_board_class__WEBPACK_IMPORTED_MODULE_0__.GameBoard;
    }

};

class HumanPlayer extends Player {
    constructor() {
        super();
        this.playerType = "human";
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super();
        this.playerType = "computer";
    }
}

/***/ }),

/***/ "./src/ship-class.js":
/*!***************************!*\
  !*** ./src/ship-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        // this.name = name;
        this.length = length;
        this.isShipSunk = false;
        this.nrOfHitsTaken = 0;
    }
    hit() {
        this.nrOfHitsTaken += 1;
        return this.nrOfHitsTaken;
    }
    isSunk() {
        if (this.nrOfHitsTaken >= this.length) return this.isShipSunk = true;
        return this.isShipSunk = false;
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard1: () => (/* binding */ gameBoard1),
/* harmony export */   playerShip: () => (/* binding */ playerShip)
/* harmony export */ });
/* harmony import */ var _ship_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-class */ "./src/ship-class.js");
/* harmony import */ var _game_board_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-board-class */ "./src/game-board-class.js");
/* harmony import */ var _player_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-class */ "./src/player-class.js");




let playerShip = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(6);
// let playerShip2 = new Ship(3);
// let playerShip3 = new Ship(3)

let gameBoard1 = new _game_board_class__WEBPACK_IMPORTED_MODULE_1__.GameBoard;

// console.log(gameBoard1.placeShip(playerShip, [3,3], "horizontal"));
// gameBoard1.placeShip(playerShip2, [6,2], "vertical");

gameBoard1.receiveAttack([3,3]);
// console.log(playerShip.nrOfHitsTaken)
// console.log(gameBoard1.arrayOfPlacedShipObjects)
// console.log(gameBoard1.placedShipsCoordinates)

// gameBoard1.placeShip(playerShip3, [2,4], "vertical");
console.log(gameBoard1.boardArray);
console.log("aaaaaaaaaas")

console.log(gameBoard1.checkIfAllShipsSunk());
/******/ })()
;
//# sourceMappingURL=main.js.map
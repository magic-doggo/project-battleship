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
        this.columns = new Array(10);
        this.rows = new Array(10);
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
/* harmony import */ var _ship_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-class */ "./src/ship-class.js");
/* harmony import */ var _game_board_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-board-class */ "./src/game-board-class.js");
/* harmony import */ var _player_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-class */ "./src/player-class.js");




let playerShip = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(8);
console.log(playerShip);
for (let i = 0; i < playerShip.length; i++) {
    playerShip.hit();
}

let gameBoard1 = new _game_board_class__WEBPACK_IMPORTED_MODULE_1__.GameBoard;
console.log(gameBoard1.boardArray.length)
// let player = new Player;
// console.log(player);

// let computerPlayer = new ComputerPlayer;
// console.log(computerPlayer);

console.log(playerShip.isSunk());

console.log(gameBoard1.placeShip(playerShip, [3,3], "vertical"));
/******/ })()
;
//# sourceMappingURL=main.js.map
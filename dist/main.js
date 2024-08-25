/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#boards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.board {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    width: 400px;
}

.humanGridItem,
.computerGridItem {
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    border: 2px solid red;
}

.yourTurn {
    background-color: gray;
    pointer-events: none;
    border: 1px solid black;
    color: wheat;
}

#human-board,
#computer-board {
    margin: 10px 0;
}

.board-title {
    margin: 10px 0;
}

#player-turn {
    font-weight: bolder;
}

.buttons-container {
    display: flex;
    gap: 20px;
}

#ships-container {
    border: 2px solid red;
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 50%;
}

.shipBlock {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    box-sizing: border-box;
}

#playerDestroyer,
#playerSubmarine,
#playerCruiser,
#playerBattleship,
#playerCarrier {
    display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,8BAA8B;IAC9B,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;;;;;IAKI,aAAa;AACjB","sourcesContent":["#boards-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;\n    height: 400px;\n    width: 400px;\n}\n\n.humanGridItem,\n.computerGridItem {\n    height: 40px;\n    width: 40px;\n    box-sizing: border-box;\n    border: 2px solid red;\n}\n\n.yourTurn {\n    background-color: gray;\n    pointer-events: none;\n    border: 1px solid black;\n    color: wheat;\n}\n\n#human-board,\n#computer-board {\n    margin: 10px 0;\n}\n\n.board-title {\n    margin: 10px 0;\n}\n\n#player-turn {\n    font-weight: bolder;\n}\n\n.buttons-container {\n    display: flex;\n    gap: 20px;\n}\n\n#ships-container {\n    border: 2px solid red;\n    display: flex;\n    /* flex-direction: column; */\n    gap: 10px;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 50%;\n}\n\n.shipBlock {\n    width: 40px;\n    height: 40px;\n    border: 1px solid black;\n    box-sizing: border-box;\n}\n\n#playerDestroyer,\n#playerSubmarine,\n#playerCruiser,\n#playerBattleship,\n#playerCarrier {\n    display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game-board-class.js":
/*!*********************************!*\
  !*** ./src/game-board-class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   firstDigit: () => (/* binding */ firstDigit),
/* harmony export */   lastDigit: () => (/* binding */ lastDigit)
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
        // this.hitCoordinates = []; //no functionality relies on this yet
        // this.missedCoordinates = []; //no functionality relies on this yet
        this.notShotCoordinates = this.createIndexArray(99); //creates array with val from 0 to 99
        this.arrayOfPlacedShipObjects = [];
        GameBoard.gameBoardClassInstances.push(this);
    }

    static isPlayer1Turn = true;
    static gameBoardClassInstances = [];

    // placeShip("boat-length 3", [6,7], vertical) == means the boat starts 6,7 and ends at [6,9]
    //try vertical always going down, horizontal always goes to the right
    // placeShipOLd(ship, coordinates, direction) {
    //     let arrayCoords = coordinates;
    //     if (typeof coordinates == 'object') {
    //         arrayCoords = (coordinates[0] * 10) + coordinates[1];
    //     }
    //     console.log(arrayCoords);
    //     let tempArray = [];
    //     let tempShipObject = {};
    //     for (let i = 0; i < ship.length; i++) {
    //         if (direction == "vertical") {
    //             if (coordinates[0] + ship.length >= 10) throw new Error('ship does not fit vertically'); //fix this so it does not run every iteration
    //             //increase by 10 when row changes (vertical changes)
    //             if (this.boardArray[arrayCoords] != undefined) {
    //                 tempArray = [];
    //                 throw new Error(`ship overlaps vertically with another at index ${arrayCoords}`);
    //             }
    //             tempArray.push(arrayCoords);
    //             arrayCoords += 10;
    //             if (arrayCoords >= 100) console.log(arrayCoords, ' arraycoords vert');
    //         } else if (direction == "horizontal") {
    //             if (coordinates[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
    //             if (this.boardArray[arrayCoords] != undefined) {
    //                 tempArray = [];
    //                 throw new Error(`ship overlaps horizontally with another at index ${arrayCoords}`)
    //             };
    //             //increase by 1 when column changes (horizontal changes)
    //             tempArray.push(arrayCoords, ' arraycoords horiz');
    //             arrayCoords += 1;
    //             if (arrayCoords >= 100) console.log(arrayCoords);
    //         }
    //     }
    //     // this.placedShipsCoordinates.push(tempArray); //not going to use placedshipscoordinates?

    //     tempShipObject.coordinates = tempArray;
    //     tempShipObject.shipInstance = ship;
    //     this.arrayOfPlacedShipObjects.push(tempShipObject);

    //     for (let coordinate of tempArray) {
    //         this.boardArray[coordinate] = 1;
    //     }
    //     console.log(this);
    //     console.log(tempArray , " temparray");
    //     return tempArray;
    // }

    placeShip(ship, coordinates, direction) {
        let arrayCoords = coordinates;
        if (typeof coordinates == 'object') {
            arrayCoords = (coordinates[0] * 10) + coordinates[1];
        }
        let tempArray = [];
        let tempShipObject = {};
        let coordinatesAsArrayValues;
        if (arrayCoords < 10) {
            let firstIndex = 0;
            let secondIndex = firstDigit(arrayCoords)
            coordinatesAsArrayValues = [firstIndex, secondIndex];
        } else {
            let firstIndex = firstDigit(arrayCoords);
            let secondIndex = lastDigit(arrayCoords);
            coordinatesAsArrayValues = [firstIndex, secondIndex];
        };
        for (let i = 0; i < ship.length; i++) {
            if (direction == "vertical") {
                if (coordinatesAsArrayValues[0] + ship.length >= 10) throw new Error('ship does not fit vertically'); //fix this so it does not run every iteration
                //increase by 10 when row changes (vertical changes)
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps vertically with another at index ${arrayCoords}`);
                }
                tempArray.push(arrayCoords);
                arrayCoords += 10;
                if (arrayCoords >= 100) console.log(arrayCoords, ' arraycoords vert');
            } else if (direction == "horizontal") {
                if (coordinatesAsArrayValues[1] + ship.length >= 10) throw new Error('ship does not fit horizontally');
                if (this.boardArray[arrayCoords] != undefined) {
                    tempArray = [];
                    throw new Error(`ship overlaps horizontally with another at index ${arrayCoords}`)
                };
                //increase by 1 when column changes (horizontal changes)
                tempArray.push(arrayCoords);
                arrayCoords += 1;
                if (arrayCoords >= 100) console.log(arrayCoords);
            }
        }
        // this.placedShipsCoordinates.push(tempArray); //not going to use placedshipscoordinates?

        tempShipObject.coordinatesAsArrayValues = tempArray;
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
            // this.hitCoordinates.push(attackedArrayCoords);
            let index = this.notShotCoordinates.indexOf(attackedArrayCoords);
            this.notShotCoordinates.splice(index, 1);

            for (let ship of this.arrayOfPlacedShipObjects) {
                for (let coordinate of ship.coordinatesAsArrayValues) {
                    if (coordinate === attackedArrayCoords) {
                        ship.shipInstance.hit();
                    }
                }
            }

        } else if (this.boardArray[attackedArrayCoords] == undefined) {
            this.boardArray[attackedArrayCoords] = 0; //place 0 on board if attack missed
            // this.missedCoordinates.push(attackedArrayCoords);
            let index = this.notShotCoordinates.indexOf(attackedArrayCoords);
            this.notShotCoordinates.splice(index, 1);
        }
        else if (this.boardArray[attackedArrayCoords] == "x" || this.boardArray[attackedArrayCoords] == 0) {
            throw new Error(`You have already attacked ${coordinates} before, try a different spot`);
        }
        else throw new Error('Not a valid coordinate') //can make it check of coordinate exists in boardArray, but not needed?
        //swap player turn? edit later 100
        // if (this.checkIfAllShipsSunk()) document.getElementById('winner').innerText = 'Player Won';
        // return `Turn of `
    }

    checkIfAllShipsSunk() {
        if (!GameBoard.gameBoardClassInstances[0].boardArray.includes(1)) return true;
        else if (!GameBoard.gameBoardClassInstances[1].boardArray.includes(1)) return true;
        return false;
    }

    renderBoard(boardContainer, specificPlayerGridClass) {
        for (let i = 0; i < this.boardArray.length; i++) {
            let gridItem = document.createElement('div');
            boardContainer.appendChild(gridItem);
            gridItem.classList.add(specificPlayerGridClass);
            if (i < 10) {
                let firstIndex = 0;
                let secondIndex = firstDigit(i)
                let [a, b] = [firstIndex, secondIndex];
                gridItem.addEventListener('click', (event) => {
                    this.onCellClick([a, b], event);
                });
            } else {
                let firstIndex = firstDigit(i);
                let secondIndex = lastDigit(i);
                let [a, b] = [firstIndex, secondIndex];
                gridItem.addEventListener('click', (event) => {
                    this.onCellClick([a, b], event);
                });
            }
        }
    }

    updateBoard(specificPlayerGridClass) { //maybe do not need player specific class param, since method is ran on 1 player board anyway
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //Update the board visually with current location of ships/hits/nothings
        for (let i = 0; i < this.boardArray.length; i++) {
            if (this.boardArray[i] == 1) {
                //keep computer ships hidden
                //updatePlayerBoardAfterPcAttack() is used on the player board, which does show ship location
                childDivs[i].innerText = '';
            } else if (this.boardArray[i] == 'x') {
                childDivs[i].innerText = 'hit';
            } else if (this.boardArray[i] == 0) {
                childDivs[i].innerText = 'miss';
            } else {
                childDivs[i].innerText = "";
            }
        }

        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            // document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            // document.getElementById('player-turn').style.visibility = 'visible';
        };
    }

    onCellClick(coordinates, event) {//move dom changes to updateBoard method later?
        let currentlyHiddenCells = document.querySelectorAll('.yourTurn');
        let classesOfGridItem = event.target.className.split(' ');
        let firstClassesOfGridItem = classesOfGridItem[0];
        this.receiveAttack(coordinates);
        this.updateBoard(firstClassesOfGridItem);
        let cellsOnClickedBoard = document.getElementsByClassName(firstClassesOfGridItem);
        currentlyHiddenCells.forEach(cell => {
            cell.classList.remove('yourTurn');
        });
        for (let i = 0; i < cellsOnClickedBoard.length; i++) {
            cellsOnClickedBoard[i].classList.toggle('yourTurn');
        };
        // if (GameBoard.isPlayer1Turn === true) {
        //     GameBoard.isPlayer1Turn = false;
        //     document.getElementById('player-turn').style.visibility = 'hidden';
        // } else {
        //     GameBoard.isPlayer1Turn = true;
        //     document.getElementById('player-turn').style.visibility = 'visible';
        // };
        // console.log(GameBoard.gameBoardClassInstances[0].boardArray);
        // console.log(GameBoard.gameBoardClassInstances[1].boardArray, "  computer");
        if (this.checkIfAllShipsSunk()) {
            document.getElementById('winner').innerText = 'Player 1 Won';
            document.getElementById('boards-container').classList.add('yourTurn');
        }
        else GameBoard.gameBoardClassInstances[0].receiveAttackFromPc(GameBoard.gameBoardClassInstances[0].getRadomNotShotPlayerBoardCoordinate)     
    }

    createIndexArray(n) {
        let newArr = [];
        for (let i = 0; i <= n; i++) {
            newArr.push(i);
        }
        return newArr;
    }

    receiveAttackFromPc(randomCoordFunction) {
        //is storing logs to a different class instance in each class instance cheating? GameBoard.gameBoardClassInstances[0]
        //since we only interact with pc board via dom, pc GameBoard instance can through this interact with player GameBoard instance
        let coordinates = randomCoordFunction();
        if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == 1) {
            GameBoard.gameBoardClassInstances[0].boardArray[coordinates] = "x"; //place x on board if ship is hit
            // GameBoard.gameBoardClassInstances[0].hitCoordinates.push(coordinates);
            let index = GameBoard.gameBoardClassInstances[0].notShotCoordinates.indexOf(coordinates);
            GameBoard.gameBoardClassInstances[0].notShotCoordinates.splice(index, 1);
            for (let ship of GameBoard.gameBoardClassInstances[0].arrayOfPlacedShipObjects) {
                for (let coordinate of ship.coordinatesAsArrayValues) {
                    if (coordinate === coordinates) {
                        ship.shipInstance.hit();
                    }
                }
            }
        } else if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == undefined) {
            GameBoard.gameBoardClassInstances[0].boardArray[coordinates] = 0; //place 0 on board if attack missed
            // GameBoard.gameBoardClassInstances[0].missedCoordinates.push(coordinates);
            let index = GameBoard.gameBoardClassInstances[0].notShotCoordinates.indexOf(coordinates);
            GameBoard.gameBoardClassInstances[0].notShotCoordinates.splice(index, 1);
        } else if (GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == "x" || GameBoard.gameBoardClassInstances[0].boardArray[coordinates] == 0) {
            throw new Error(`You have already attacked ${coordinates} before, try a different spot`);
        } else throw new Error('Not a valid coordinate') //can make it check of coordinate exists in boardArray, but not needed?
        GameBoard.gameBoardClassInstances[0].updatePlayerBoardAfterPcAttack('humanGridItem');
        if (this.checkIfAllShipsSunk()) {
            document.getElementById('winner').innerText = 'Computer Won';
            document.getElementById('boards-container').classList.add('yourTurn');
            // document.getElementById('player-turn').style.visibility = 'hidden';
        }
    }

    getRadomNotShotPlayerBoardCoordinate() {
        return GameBoard.gameBoardClassInstances[0].notShotCoordinates[(Math.floor(Math.random() * GameBoard.gameBoardClassInstances[0].notShotCoordinates.length))]
    }

    updatePlayerBoardAfterPcAttack(specificPlayerGridClass) { //I could just use updatePlayerBoard and stop using "this."? Alternate player boards based on isPlayer1Turn?
        let childDivs = document.getElementsByClassName(specificPlayerGridClass);
        //Update the board visually with current location of ships/hits/nothings
        for (let i = 0; i < GameBoard.gameBoardClassInstances[0].boardArray.length; i++) {
            if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 1) {
                childDivs[i].innerText = 'ship';
            } else if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 'x') {
                childDivs[i].innerText = 'hit';
            } else if (GameBoard.gameBoardClassInstances[0].boardArray[i] == 0) {
                childDivs[i].innerText = 'miss';
            } else childDivs[i].innerText = "";
        }
        let currentlyHiddenCells = document.querySelectorAll('.yourTurn');
        let cellsOnClickedBoard = document.getElementsByClassName(specificPlayerGridClass);
        currentlyHiddenCells.forEach(cell => {
            cell.classList.remove('yourTurn');
        });
        for (let i = 0; i < cellsOnClickedBoard.length; i++) {
            cellsOnClickedBoard[i].classList.toggle('yourTurn');
        };
        if (GameBoard.isPlayer1Turn === true) {
            GameBoard.isPlayer1Turn = false;
            // document.getElementById('player-turn').style.visibility = 'hidden';
        } else {
            GameBoard.isPlayer1Turn = true;
            // document.getElementById('player-turn').style.visibility = 'visible';
        }
    }

    getRandomShipDirection() {
        let shipDirections = ['vertical', 'horizontal'];
        return shipDirections[Math.floor(Math.random() * shipDirections.length)];
    }

    placeShipsRandomly(arrayOfPlayerShips, player) {
        let coordArray = this.createIndexArray(99);
        for (let ship of arrayOfPlayerShips) {
            let potentialShipCoords = [];
            while (potentialShipCoords[0] == undefined) {
                let coords = Math.floor(Math.random() * coordArray.length);
                try {
                    potentialShipCoords = player.playerBoard.placeShip(ship, coords, this.getRandomShipDirection());
                } catch (error) {
                    console.log(coords);
                }
            }
        }
    }
}

//should these be class methods too? used in the GameBoard class but not exactly connected, just helper functions
//project requirement is not to have global functions
function firstDigit(n) { //use to get 1st index digit and convert too 1st coordinate
    while (n >= 10) n /= 10;
    return Math.floor(n)
}

function lastDigit(n) { //use to get 2nd idex digit and convert to 2nd coordinate
    return Math.floor(n % 10);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let playerDestroyer = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
let playerSubmarine = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
let playerCruiser = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
let playerBattleship = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
let playerCarrier = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(5);

let computerDestroyer = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
let computerSubmarine = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
let computerCruiser = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
let computerBattleship = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
let computerCarrier = new _ship_class__WEBPACK_IMPORTED_MODULE_0__.Ship(5);

let humanPlayer = new _player_class__WEBPACK_IMPORTED_MODULE_2__.HumanPlayer;
let computerPlayer = new _player_class__WEBPACK_IMPORTED_MODULE_2__.ComputerPlayer;

let humanBoard = document.getElementById('human-board');
let computerBoard = document.getElementById('computer-board');
humanPlayer.playerBoard.renderBoard(humanBoard, 'humanGridItem');
computerPlayer.playerBoard.renderBoard(computerBoard, 'computerGridItem');

//fix eslint output tab: Config (unnamed): Key "plugins": This appears to be in eslintrc format (array of strings) rather than flat config format (object)

let arrayOfPlayerShips = [playerDestroyer, playerSubmarine, playerCruiser, playerBattleship, playerCarrier];
let arrayOfComputerShips = [computerDestroyer, computerSubmarine, computerCruiser, computerBattleship, computerCarrier];

// humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
// computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);

// computerPlayer.playerBoard.updateBoard("computerGridItem");
// humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");

//do I want player/computer to shoot again if they landed a hit?

const shufflePlayerShipsButton = document.getElementById('shuffle-board');
shufflePlayerShipsButton.addEventListener('click', () => {
    humanPlayer.playerBoard.boardArray = new Array(100);
    humanPlayer.playerBoard.placeShipsRandomly(arrayOfPlayerShips, humanPlayer);
    humanPlayer.playerBoard.updatePlayerBoardAfterPcAttack("humanGridItem");

    computerPlayer.playerBoard.boardArray = new Array(100);
    computerPlayer.playerBoard.placeShipsRandomly(arrayOfComputerShips, computerPlayer);
    computerPlayer.playerBoard.updateBoard("computerGridItem");
});

//make game start without ships? or have button to place ships manually


/******/ })()
;
//# sourceMappingURL=main.js.map
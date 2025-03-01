/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: \"Bangers\", system-ui;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: linear-gradient(7deg, rgba(2,2,31,1) 0%, rgba(25,78,161,1) 100%);\r\n    font-family: \"Bangers\", system-ui;\r\n}\r\n\r\nbutton {\r\n    padding: 10px 20px;\r\n    border: 2px solid white;\r\n    color: white;\r\n    background: rgb(92, 163, 214);\r\n    cursor: pointer;\r\n    transition: 500ms;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#buttons-container {\r\n    gap: 10px;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.075);\r\n    background: rgb(45, 57, 107);\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n}\r\n\r\n#player-container {\r\n    position: relative; \r\n    border: 4px solid white\r\n  }\r\n\r\n#enemy-container {\r\n    border: 4px solid white\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between; \r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 20px; \r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin: 20px 0; \r\n}\r\n\r\n#gameboards-container {\r\n    display: flex;\r\n    gap: 20px; \r\n    flex-grow: 1; \r\n    align-items: center;\r\n    justify-content: center; \r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 40px);\r\n    grid-template-rows: repeat(10, 40px);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #0000007f;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: rgb(88, 160, 255);\r\n    font-size: 2.5rem;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n#player-board .cell.notPlaying {\r\n    cursor: pointer !important;\r\n  }\r\n\r\n#player-board .cell.notPlaying:hover {\r\n    border: 4px solid rgb(38, 223, 38)\r\n}\r\n\r\n#enemy-board .cell.playing:hover {\r\n    border: 4px solid rgb(223, 38, 38)\r\n}\r\n\r\n#buttons-container {\r\n    display: flex;\r\n    gap: 10px; \r\n    margin: 20px 0; \r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.ship-present {\r\n    background-color: rgb(22, 24, 36);\r\n}\r\n\r\n.selected {\r\n    border: 3px solid rgb(221, 55, 55);\r\n}\r\n\r\n\r\n#ship-preview {\r\n    position: absolute;\r\n    pointer-events: none; \r\n    opacity: 0.5;\r\n    z-index: 5;\r\n  }\r\n  \r\n  #ship-preview.valid {\r\n    background-color: green;\r\n  }\r\n  \r\n  #ship-preview.invalid {\r\n    background-color: red;\r\n  }\r\n\r\n  .ship {\r\n    position: absolute;\r\n    background-color: gray;\r\n    opacity: 0.8;\r\n    cursor: move;\r\n    z-index: 10; \r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButtons: () => (/* binding */ createButtons),\n/* harmony export */   createGameContainers: () => (/* binding */ createGameContainers),\n/* harmony export */   createHeading: () => (/* binding */ createHeading),\n/* harmony export */   renderGameBoard: () => (/* binding */ renderGameBoard),\n/* harmony export */   toggleRevealComputerShips: () => (/* binding */ toggleRevealComputerShips),\n/* harmony export */   updateCellAfterAttack: () => (/* binding */ updateCellAfterAttack),\n/* harmony export */   updatePlayerBoardUI: () => (/* binding */ updatePlayerBoardUI)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\r\n\r\nconst renderGameBoard = (\r\n  containerSelector,\r\n  boardId,\r\n  clickHandler = null\r\n) => {\r\n  const container = document.querySelector(containerSelector);\r\n  const board = document.createElement(\"div\");\r\n  board.id = boardId;\r\n  board.classList.add(\"gameboard\");\r\n\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.classList.add(\"cell\");\r\n      cell.id = `cell-${boardId}-${row}-${col}`;\r\n      cell.dataset.row = row;\r\n      cell.dataset.col = col;\r\n\r\n      if (clickHandler) {\r\n        cell.addEventListener(\"click\", () => {\r\n          clickHandler([row, col]);\r\n        });\r\n      }\r\n\r\n      board.appendChild(cell);\r\n    }\r\n  }\r\n\r\n  container.appendChild(board);\r\n};\r\n\r\nconst createHeading = () => {\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Welcome to Battleship!\";\r\n  return heading;\r\n};\r\n\r\nconst createGameContainers = () => {\r\n  const gameboardsContainer = document.createElement(\"div\");\r\n  gameboardsContainer.id = \"gameboards-container\";\r\n\r\n  const playerContainer = document.createElement(\"div\");\r\n  playerContainer.id = \"player-container\";\r\n  playerContainer.classList.add(\"hidden\");\r\n\r\n  const enemyContainer = document.createElement(\"div\");\r\n  enemyContainer.id = \"enemy-container\";\r\n  enemyContainer.classList.add(\"hidden\");\r\n\r\n  gameboardsContainer.appendChild(playerContainer);\r\n  gameboardsContainer.appendChild(enemyContainer);\r\n\r\n  return { playerContainer, enemyContainer, gameboardsContainer };\r\n};\r\n\r\nconst createButtons = () => {\r\n  const buttonsContainer = document.createElement(\"div\");\r\n  buttonsContainer.id = \"buttons-container\";\r\n\r\n  const startButton = document.createElement(\"button\");\r\n  startButton.id = \"start-button\";\r\n  startButton.textContent = \"Start Game\";\r\n\r\n  const restartButton = document.createElement(\"button\");\r\n  restartButton.id = \"restart-btn\";\r\n  restartButton.textContent = \"Restart Game\";\r\n  restartButton.classList.add(\"hidden\");\r\n\r\n  const flipButton = document.createElement(\"button\");\r\n  flipButton.id = \"flip-button\";\r\n  flipButton.textContent = \"Flip\";\r\n  flipButton.classList.add(\"hidden\");\r\n\r\n  const finalizeButton = document.createElement(\"button\");\r\n  finalizeButton.id = \"finalize-button\";\r\n  finalizeButton.textContent = \"Finalize Placement\";\r\n  finalizeButton.classList.add(\"hidden\");\r\n\r\n  const revealButton = document.createElement(\"button\");\r\n  revealButton.id = \"reveal-button\";\r\n  revealButton.textContent = \"Toggle Reveal Computer Ships\";\r\n  revealButton.classList.add(\"hidden\");\r\n\r\n  buttonsContainer.appendChild(startButton);\r\n  buttonsContainer.appendChild(flipButton);\r\n  buttonsContainer.appendChild(finalizeButton);\r\n  buttonsContainer.appendChild(revealButton);\r\n  buttonsContainer.appendChild(restartButton);\r\n\r\n  return {\r\n    startButton,\r\n    flipButton,\r\n    finalizeButton,\r\n    revealButton,\r\n    buttonsContainer,\r\n    restartButton,\r\n  };\r\n};\r\n\r\nconst updatePlayerBoardUI = (humanGameBoard) => {\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const cell = document.getElementById(`cell-player-board-${row}-${col}`);\r\n      if (cell) {\r\n        cell.classList.remove(\"ship-present\");\r\n        cell.classList.remove(\"selected\");\r\n      }\r\n    }\r\n  }\r\n\r\n  humanGameBoard.ships.forEach((placed) => {\r\n    placed.coordinates.forEach((coord) => {\r\n      const cell = document.getElementById(\r\n        `cell-player-board-${coord[0]}-${coord[1]}`\r\n      );\r\n      if (cell) {\r\n        cell.classList.add(\"ship-present\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst updateCellAfterAttack = (boardId, coordinates, wasHit) => {\r\n  if (_gameLogic__WEBPACK_IMPORTED_MODULE_0__.gameState !== \"playing\") return;\r\n\r\n  const cell = document.getElementById(\r\n    `cell-${boardId}-${coordinates[0]}-${coordinates[1]}`\r\n  );\r\n  if (wasHit) {\r\n    cell.style.backgroundColor = \"red\";\r\n    cell.textContent = \"X\";\r\n  } else {\r\n    cell.style.backgroundColor = \"blue\";\r\n    cell.textContent = \"\";\r\n  }\r\n};\r\n\r\nconst toggleRevealComputerShips = (enemyGameBoard) => {\r\n  enemyGameBoard.ships.forEach((placed) => {\r\n    placed.coordinates.forEach((coord) => {\r\n      const cell = document.getElementById(\r\n        `cell-enemy-board-${coord[0]}-${coord[1]}`\r\n      );\r\n      if (cell) {\r\n        cell.classList.toggle(\"ship-present\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/domController.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerMove: () => (/* binding */ computerMove),\n/* harmony export */   computerShipsConfig: () => (/* binding */ computerShipsConfig),\n/* harmony export */   finalizePlacement: () => (/* binding */ finalizePlacement),\n/* harmony export */   flipShip: () => (/* binding */ flipShip),\n/* harmony export */   gameState: () => (/* binding */ gameState),\n/* harmony export */   handleEnemyCellClicks: () => (/* binding */ handleEnemyCellClicks),\n/* harmony export */   handlePlayerCellClick: () => (/* binding */ handlePlayerCellClick),\n/* harmony export */   playerShipsConfig: () => (/* binding */ playerShipsConfig),\n/* harmony export */   resetGame: () => (/* binding */ resetGame),\n/* harmony export */   selectedShipIndex: () => (/* binding */ selectedShipIndex),\n/* harmony export */   spawnComputerShips: () => (/* binding */ spawnComputerShips),\n/* harmony export */   spawnPlayerShips: () => (/* binding */ spawnPlayerShips),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   toggleRevealComputerShips: () => (/* binding */ toggleRevealComputerShips),\n/* harmony export */   updateCursorState: () => (/* binding */ updateCursorState)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n// src/gameLogic.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet selectedShipIndex = null;\r\nlet playerShipsConfig = [\r\n  { size: 5, start: [0, 0], orientation: \"horizontal\" },\r\n  { size: 4, start: [1, 0], orientation: \"horizontal\" },\r\n  { size: 3, start: [2, 0], orientation: \"horizontal\" },\r\n  { size: 3, start: [3, 0], orientation: \"horizontal\" },\r\n  { size: 2, start: [4, 0], orientation: \"horizontal\" },\r\n];\r\n\r\nconst computerShipsConfig = [\r\n  { size: 5 },\r\n  { size: 4 },\r\n  { size: 3 },\r\n  { size: 3 },\r\n  { size: 2 },\r\n];\r\n\r\nconst humanGameBoard = new (_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\r\nconst enemyGameBoard = new (_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\r\nconst computerPlayer = new (_player__WEBPACK_IMPORTED_MODULE_2___default())(\"computer\");\r\n\r\nlet gameState = \"menu\";\r\nlet currentTurn = \"player\";\r\n\r\nconst resetGame = () => {\r\n  console.log(\"Resetting game...\");\r\n  gameState = \"placement\";\r\n  selectedShipIndex = null;\r\n  currentTurn = \"player\";\r\n\r\n  // Reset player ships to initial state\r\n  playerShipsConfig.length = 0;\r\n  playerShipsConfig.push(\r\n    { size: 5, start: [0, 0], orientation: \"horizontal\" },\r\n    { size: 4, start: [1, 0], orientation: \"horizontal\" },\r\n    { size: 3, start: [2, 0], orientation: \"horizontal\" },\r\n    { size: 3, start: [3, 0], orientation: \"horizontal\" },\r\n    { size: 2, start: [4, 0], orientation: \"horizontal\" }\r\n  );\r\n\r\n  // Fully reset game boards\r\n  humanGameBoard.reset();\r\n  enemyGameBoard.reset();\r\n  humanGameBoard.ships = [];\r\n  humanGameBoard.missedAttacks = [];\r\n  enemyGameBoard.ships = [];\r\n  enemyGameBoard.missedAttacks = [];\r\n\r\n  // Clear enemy board visuals\r\n  const enemyCells = document.querySelectorAll(\"#enemy-board .cell\");\r\n  enemyCells.forEach((cell) => {\r\n    cell.classList.remove(\"ship-present\", \"playing\"); // Remove relevant classes\r\n    cell.style.backgroundColor = \"\";\r\n    cell.textContent = \"\"; // Clear the \"X\" markers\r\n  });\r\n\r\n  const playerCells = document.querySelectorAll(\"#player-board .cell\");\r\n  playerCells.forEach((cell) => {\r\n    // cell.classList.remove(\"ship-present\", \"playing\");\r\n    cell.style.backgroundColor = \"\";\r\n    cell.textContent = \"\";\r\n  });\r\n\r\n  // playerContainer.classList.remove(\"hidden\");\r\n  // enemyContainer.classList.remove(\"hidden\");\r\n\r\n  updateCursorState();\r\n  spawnPlayerShips();\r\n};\r\n\r\nconst updateCursorState = () => {\r\n  const playerCells = document.querySelectorAll(\"#player-board .cell\");\r\n  if (gameState === \"placement\") {\r\n    playerCells.forEach((cell) => cell.classList.add(\"notPlaying\"));\r\n  } else {\r\n    playerCells.forEach((cell) => cell.classList.remove(\"notPlaying\"));\r\n  }\r\n\r\n  const computerCells = document.querySelectorAll(\"#enemy-board .cell\");\r\n  if (gameState === \"playing\") {\r\n    computerCells.forEach((cell) => cell.classList.add(\"playing\"));\r\n  } else {\r\n    computerCells.forEach((cell) => cell.classList.remove(\"playing\"));\r\n  }\r\n};\r\n\r\nconst isFlipValid = (selectedIndex, newOrientation) => {\r\n  const tempBoard = new (_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\r\n  playerShipsConfig.forEach((config, index) => {\r\n    if (index === selectedIndex) return;\r\n    const ship = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(config.size);\r\n    tempBoard.placeShip(ship, config.start, config.orientation);\r\n  });\r\n\r\n  const selectedConfig = playerShipsConfig[selectedIndex];\r\n  const testShip = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(selectedConfig.size);\r\n  return tempBoard.isPlacementValid(\r\n    testShip,\r\n    selectedConfig.start,\r\n    newOrientation\r\n  );\r\n};\r\n\r\n// Start the game\r\nconst startGame = (playerContainer, enemyContainer, finalizeButton) => {\r\n  gameState = \"placement\";\r\n  humanGameBoard.reset();\r\n  enemyGameBoard.reset();\r\n\r\n  playerContainer.classList.remove(\"hidden\");\r\n  enemyContainer.classList.remove(\"hidden\");\r\n\r\n  spawnPlayerShips();\r\n  finalizeButton.classList.remove(\"hidden\");\r\n};\r\n\r\n// Place player ships on the board\r\nconst spawnPlayerShips = () => {\r\n  humanGameBoard.reset();\r\n  playerShipsConfig.forEach((shipConfig) => {\r\n    const ship = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(shipConfig.size);\r\n    humanGameBoard.placeShip(ship, shipConfig.start, shipConfig.orientation);\r\n  });\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_4__.updatePlayerBoardUI)(humanGameBoard);\r\n};\r\n\r\n// Place computer ships randomly\r\nconst spawnComputerShips = () => {\r\n  enemyGameBoard.reset();\r\n  computerShipsConfig.forEach((shipConfig) => {\r\n    const ship = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(shipConfig.size);\r\n    let placed = false;\r\n    while (!placed) {\r\n      let orientation = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomOrientation)();\r\n      let start = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomStart)(shipConfig.size, orientation);\r\n      placed = enemyGameBoard.placeShip(ship, start, orientation);\r\n    }\r\n  });\r\n  console.log(\"Computer is ready!\");\r\n};\r\n\r\nconst toggleRevealComputerShips = () => {\r\n  enemyGameBoard.ships.forEach((placed) => {\r\n    placed.coordinates.forEach((coord) => {\r\n      const cell = document.getElementById(\r\n        `cell-enemy-board-${coord[0]}-${coord[1]}`\r\n      );\r\n      if (cell) {\r\n        cell.classList.toggle(\"ship-present\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n// Handle player clicking their own board (for ship movement)\r\nconst handlePlayerCellClick = (coordinates) => {\r\n  if (gameState === \"playing\") return;\r\n\r\n  if (selectedShipIndex === null) {\r\n    const index = humanGameBoard.ships.findIndex((placed) =>\r\n      placed.coordinates.some(\r\n        (coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]\r\n      )\r\n    );\r\n    if (index !== -1) {\r\n      selectedShipIndex = index;\r\n      const selectedShip = humanGameBoard.ships[selectedShipIndex];\r\n      selectedShip.coordinates.forEach((coord) => {\r\n        const cell = document.getElementById(\r\n          `cell-player-board-${coord[0]}-${coord[1]}`\r\n        );\r\n        if (cell) cell.classList.add(\"selected\");\r\n      });\r\n    }\r\n  } else {\r\n    const tempBoard = new (_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\r\n    const tempConfig = playerShipsConfig.map((config) => ({\r\n      ...config,\r\n      start: [...config.start],\r\n    }));\r\n    tempConfig[selectedShipIndex].start = coordinates;\r\n\r\n    let allPlaced = true;\r\n    tempConfig.forEach((shipConfig) => {\r\n      const ship = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(shipConfig.size);\r\n      const placed = tempBoard.placeShip(\r\n        ship,\r\n        shipConfig.start,\r\n        shipConfig.orientation\r\n      );\r\n      if (!placed) allPlaced = false;\r\n    });\r\n\r\n    if (allPlaced) {\r\n      playerShipsConfig[selectedShipIndex].start = coordinates;\r\n      spawnPlayerShips();\r\n    } else {\r\n      alert(\r\n        \"Cannot move ship: placement would cause collision or go out of bounds.\"\r\n      );\r\n    }\r\n    selectedShipIndex = null;\r\n  }\r\n};\r\n\r\n// Handle player attacking the enemy board :P\r\n\r\nconst handleEnemyCellClicks = (coordinates) => {\r\n  if (gameState !== \"playing\" || currentTurn !== \"player\") return;\r\n  const wasHit = enemyGameBoard.receiveAttack(coordinates);\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_4__.updateCellAfterAttack)(\"enemy-board\", coordinates, wasHit);\r\n\r\n  if (gameState === \"playing\") {\r\n    if (enemyGameBoard.isAllSunk()) {\r\n      alert(\"Player wins!\");\r\n      return;\r\n    }\r\n\r\n    if (wasHit) {\r\n    } else {\r\n      currentTurn = \"computer\";\r\n      setTimeout(computerMove, 1000);\r\n    }\r\n  }\r\n};\r\n\r\n// Computer makes a move!\r\nconst computerMove = () => {\r\n  const move = computerPlayer.generateRandomMove();\r\n  const wasHit = humanGameBoard.receiveAttack(move);\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_4__.updateCellAfterAttack)(\"player-board\", move, wasHit);\r\n\r\n  if (humanGameBoard.isAllSunk()) {\r\n    alert(\"Computer Wins!\");\r\n    return;\r\n  }\r\n\r\n  if (wasHit) {\r\n    setTimeout(computerMove, 2000);\r\n  } else {\r\n    currentTurn = \"player\";\r\n  }\r\n};\r\n\r\n// Flip the selected ship\r\nconst flipShip = () => {\r\n  if (selectedShipIndex === null) return;\r\n  const currentOrientation = playerShipsConfig[selectedShipIndex].orientation;\r\n  const newOrientation =\r\n    currentOrientation === \"horizontal\" ? \"vertical\" : \"horizontal\";\r\n\r\n  if (!isFlipValid(selectedShipIndex, newOrientation)) {\r\n    alert(\r\n      \"Cannot flip ship: placement would cause collision or go out of bounds.\"\r\n    );\r\n    return false;\r\n  }\r\n\r\n  playerShipsConfig[selectedShipIndex].orientation = newOrientation;\r\n  spawnPlayerShips();\r\n  selectedShipIndex = null;\r\n  return true;\r\n};\r\n\r\n// Finalize ship placement and start playing\r\nconst finalizePlacement = () => {\r\n  spawnComputerShips();\r\n  gameState = \"playing\";\r\n  console.log(\"Game started! Player's ships locked in.\");\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("class GameBoard {\r\n  constructor() {\r\n    this.ships = [];\r\n    this.missedAttacks = [];\r\n  }\r\n\r\n  placeShip(ship, startCoordinate, orientation = \"horizontal\") {\r\n    const newCoordinates = this.getCoordinatesForShip(\r\n      startCoordinate,\r\n      ship.length,\r\n      orientation\r\n    );\r\n\r\n    if (\r\n      !this.areCoordinatesInBounds(newCoordinates) ||\r\n      this.isCollision(newCoordinates)\r\n    ) {\r\n      return false;\r\n    }\r\n    this.ships.push({ ship, coordinates: newCoordinates });\r\n    return true;\r\n  }\r\n\r\n  // Process an attack at a given coordinate\r\n  receiveAttack(coordinate) {\r\n    let hit = false;\r\n    for (let placed of this.ships) {\r\n      for (let coords of placed.coordinates) {\r\n        if (coords[0] === coordinate[0] && coords[1] === coordinate[1]) {\r\n          placed.ship.hit();\r\n          hit = true;\r\n          break;\r\n        }\r\n      }\r\n      if (hit) break;\r\n    }\r\n    if (!hit) {\r\n      this.missedAttacks.push(coordinate);\r\n    }\r\n    return hit;\r\n  }\r\n\r\n  // Check if all ships on the board have been sunk\r\n  isAllSunk() {\r\n    for (let placed of this.ships) {\r\n      if (!placed.ship.isSunk()) return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  // Helper function to return all ship coordinates for testing purposes\r\n  getShipCoordinates() {\r\n    let coords = [];\r\n    for (let placed of this.ships) {\r\n      for (let coord of placed.coordinates) {\r\n        coords.push(coord);\r\n      }\r\n    }\r\n    return coords;\r\n  }\r\n\r\n  reset() {\r\n    this.ships = [];\r\n    this.missedAttacks = [];\r\n  }\r\n\r\n  getCoordinatesForShip(\r\n    startCoordinate,\r\n    shipLength,\r\n    orientation = \"horizontal\"\r\n  ) {\r\n    const [x, y] = startCoordinate;\r\n    let coordinates = [];\r\n    for (let i = 0; i < shipLength; i++) {\r\n      if (orientation === \"horizontal\") {\r\n        coordinates.push([x, y + i]);\r\n      } else {\r\n        coordinates.push([x + i, y]);\r\n      }\r\n    }\r\n    return coordinates;\r\n  }\r\n\r\n  areCoordinatesInBounds(coordinates) {\r\n    return coordinates.every(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);\r\n  }\r\n\r\n  isCollision(newCoordinates) {\r\n    for (let placed of this.ships) {\r\n      for (let coord of placed.coordinates) {\r\n        for (let newCoord of newCoordinates) {\r\n          if (coord[0] === newCoord[0] && coord[1] === newCoord[1]) {\r\n            return true;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  isPlacementValid(ship, startCoordinate, orientation = \"horizontal\") {\r\n    const newCoordinates = this.getCoordinatesForShip(\r\n      startCoordinate,\r\n      ship.length,\r\n      orientation\r\n    );\r\n    return (\r\n      this.areCoordinatesInBounds(newCoordinates) &&\r\n      !this.isCollision(newCoordinates)\r\n    );\r\n  }\r\n}\r\nmodule.exports = GameBoard;\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\r\n\r\n\r\n\r\n// Initialize UI\r\nconst heading = (0,_domController__WEBPACK_IMPORTED_MODULE_1__.createHeading)();\r\nconst { playerContainer, enemyContainer, gameboardsContainer } =\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_1__.createGameContainers)();\r\nconst {\r\n  startButton,\r\n  flipButton,\r\n  finalizeButton,\r\n  revealButton,\r\n  buttonsContainer,\r\n  restartButton,\r\n} = (0,_domController__WEBPACK_IMPORTED_MODULE_1__.createButtons)();\r\n\r\nconst app = document.querySelector(\"#app\");\r\napp.appendChild(heading);\r\napp.appendChild(gameboardsContainer);\r\napp.appendChild(buttonsContainer);\r\n\r\n// Set up event listeners\r\nstartButton.addEventListener(\"click\", () => {\r\n  startButton.classList.add(\"hidden\");\r\n  flipButton.classList.remove(\"hidden\");\r\n  finalizeButton.classList.remove(\"hidden\");\r\n  // revealButton.classList.remove(\"hidden\"); <-- if you wanna see the computers ships ( CHEATING !!! )\r\n  restartButton.classList.remove(\"hidden\");\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(\"#player-container\", \"player-board\", _gameLogic__WEBPACK_IMPORTED_MODULE_2__.handlePlayerCellClick);\r\n  (0,_domController__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(\"#enemy-container\", \"enemy-board\", _gameLogic__WEBPACK_IMPORTED_MODULE_2__.handleEnemyCellClicks);\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.startGame)(playerContainer, enemyContainer, finalizeButton);\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.updateCursorState)(); // Update cursor state when game starts\r\n});\r\n\r\nflipButton.addEventListener(\"click\", () => {\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.flipShip)();\r\n});\r\n\r\nfinalizeButton.addEventListener(\"click\", () => {\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.finalizePlacement)();\r\n  finalizeButton.classList.add(\"hidden\");\r\n  flipButton.classList.add(\"hidden\");\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.updateCursorState)();\r\n});\r\n\r\nrevealButton.addEventListener(\"click\", _gameLogic__WEBPACK_IMPORTED_MODULE_2__.toggleRevealComputerShips);\r\n\r\nrestartButton.addEventListener(\"click\", () => {\r\n  (0,_gameLogic__WEBPACK_IMPORTED_MODULE_2__.resetGame)();\r\n  flipButton.classList.remove(\"hidden\");\r\n  finalizeButton.classList.remove(\"hidden\");\r\n});\r\n\r\nconst originalHandlePlayerCellClick = _gameLogic__WEBPACK_IMPORTED_MODULE_2__.handlePlayerCellClick;\r\n_gameLogic__WEBPACK_IMPORTED_MODULE_2__.handlePlayerCellClick = (coordinates) => {\r\n  originalHandlePlayerCellClick(coordinates);\r\n  if (_gameLogic__WEBPACK_IMPORTED_MODULE_2__.selectedShipIndex !== null) {\r\n    flipButton.classList.remove(\"hidden\");\r\n  } else {\r\n    flipButton.classList.add(\"hidden\");\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameBoard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\n\r\nclass Player {\r\n  constructor(type = \"human\") {\r\n    this.type = type;\r\n    this.gameboard = new GameBoard();\r\n\r\n    if (this.type === \"computer\") {\r\n      this.previousMoves = [];\r\n    }\r\n  }\r\n\r\n  generateRandomMove() {\r\n    let move = [];\r\n    // generate moves until -->\r\n\r\n    do {\r\n      let x = Math.floor(Math.random() * 10);\r\n      let y = Math.floor(Math.random() * 10);\r\n      move = [x, y];\r\n    } while (\r\n      this.previousMoves &&\r\n      this.previousMoves.some((m) => m[0] === move[0] && m[1] === move[1])\r\n    );\r\n    if (this.type === \"computer\") {\r\n      this.previousMoves.push(move);\r\n    }\r\n    return move;\r\n  }\r\n}\r\n\r\nmodule.exports = Player;\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hits += 1;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits >= this.length;\r\n  }\r\n}\r\n\r\nmodule.exports = Ship;\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),\n/* harmony export */   getRandomOrientation: () => (/* binding */ getRandomOrientation),\n/* harmony export */   getRandomStart: () => (/* binding */ getRandomStart)\n/* harmony export */ });\nconst getRandomInt = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\n\r\nconst getRandomOrientation = () => {\r\n  return Math.random() < 0.6 ? \"horizontal\" : \"vertical\";\r\n};\r\n\r\nconst getRandomStart = (size, orientation) => {\r\n  const maxRow = orientation === \"vertical\" ? 10 - size : 9;\r\n  const maxCol = orientation === \"horizontal\" ? 10 - size : 9; // Fixed typo from \"horizontal?\"\r\n  const row = getRandomInt(0, maxRow);\r\n  const col = getRandomInt(0, maxCol);\r\n  return [row, col];\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
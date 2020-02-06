/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/*! exports provided: guiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"guiModule\", function() { return guiModule; });\n/* harmony import */ var _newListForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newListForm */ \"./src/newListForm.js\");\n/* harmony import */ var _sideBarListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideBarListTemplate */ \"./src/sideBarListTemplate.js\");\n\n\n\nconst guiModule = function(listGenerator, taskGenerator) {\n  const newList = document.querySelector('#new-list');\n  const mainDisplay = document.querySelector('main');\n\n  newList.addEventListener('click', () => {\n    const list = Object.seal(listGenerator());\n    mainDisplay.innerHTML = _newListForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    const createList = document.querySelector('#create-list');\n    const cancelList = document.querySelector('#cancel-list');\n    const listNameInput = document.querySelector('#list-name');\n\n    createList.addEventListener('click', () => {\n      const lists = document.querySelector('#lists');\n      list.setName(listNameInput.value);\n      lists.innerHTML += Object(_sideBarListTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list);\n\n      mainDisplay.innerHTML = '';\n    });\n\n    cancelList.addEventListener('click', () => {\n      mainDisplay.innerHTML = '';\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskGenerator */ \"./src/newTaskGenerator.js\");\n/* harmony import */ var _newListGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newListGenerator */ \"./src/newListGenerator.js\");\n/* harmony import */ var _gui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui.js */ \"./src/gui.js\");\n\n\n\n\nObject(_gui_js__WEBPACK_IMPORTED_MODULE_2__[\"guiModule\"])(_newListGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _newTaskGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newListForm.js":
/*!****************************!*\
  !*** ./src/newListForm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskTemplate */ \"./src/newTaskTemplate.js\");\n\n\nconst listForm = /* template */ `\n  <h4>New List</h4>\n\n  <div>\n    <label for=\"list-name\">Name</label>\n    <input id='list-name' type=\"text\" name='list-name'>\n  </div>\n\n  <div>\n    ${_newTaskTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\n  </div>\n\n  <button id='create-list'>Save List</button>\n  <button id='cancel-list'>Cancel</button>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listForm);\n\n\n//# sourceURL=webpack:///./src/newListForm.js?");

/***/ }),

/***/ "./src/newListGenerator.js":
/*!*********************************!*\
  !*** ./src/newListGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction newList(nameInput = 't') {\n  let listName = nameInput;\n  let tasks = [];\n\n  const getName = () => listName;\n\n  const getTasks = () => tasks;\n\n  const setName = newName => {\n    listName = newName;\n  };\n\n  const addtasks = taskList => {\n    tasks = taskList;\n  };\n\n  return {\n    getName,\n    getTasks,\n    addtasks,\n    setName,\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newList);\n\n\n//# sourceURL=webpack:///./src/newListGenerator.js?");

/***/ }),

/***/ "./src/newTaskGenerator.js":
/*!*********************************!*\
  !*** ./src/newTaskGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction newTask(task, description) {\n  return {\n    task,\n    description,\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newTask);\n\n\n//# sourceURL=webpack:///./src/newTaskGenerator.js?");

/***/ }),

/***/ "./src/newTaskTemplate.js":
/*!********************************!*\
  !*** ./src/newTaskTemplate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst taskForm = /* template */ `\n  <div>\n    <label for=\"task-name\">Task</label>\n    <input id='task-name' type=\"text\" name='task-name'>\n  </div>\n\n  <div>\n    <label for=\"task-description\">Description</label>\n    <input id='task-description' type=\"text\" name='task-description'>\n  </div>\n\n  <button id='create-list'>Add Task</button>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskForm);\n\n\n//# sourceURL=webpack:///./src/newTaskTemplate.js?");

/***/ }),

/***/ "./src/sideBarListTemplate.js":
/*!************************************!*\
  !*** ./src/sideBarListTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sideBarListTemplate(list) {\n  return /* template */ `\n  <p>${list.getName()}</p>\n`;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sideBarListTemplate);\n\n\n//# sourceURL=webpack:///./src/sideBarListTemplate.js?");

/***/ })

/******/ });
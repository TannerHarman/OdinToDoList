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

/***/ "./src/domFunctions/addListToSidebar.js":
/*!**********************************************!*\
  !*** ./src/domFunctions/addListToSidebar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateFunctions_sideBarListTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templateFunctions/sideBarListTemplate */ \"./src/templateFunctions/sideBarListTemplate.js\");\n/* harmony import */ var _mainDisplayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDisplayController */ \"./src/domFunctions/mainDisplayController.js\");\n\n\n\nfunction addListToSidebar(list, masterList) {\n  const createList = document.querySelector('#create-list');\n  const listNameInput = document.querySelector('#list-name');\n  const listStorage = masterList;\n\n  createList.addEventListener('click', () => {\n    list.setName(listNameInput.value);\n    listStorage.push(list);\n    localStorage.setItem('lists', JSON.stringify(listStorage));\n\n    const lists = document.querySelector('#lists');\n    lists.innerHTML += Object(_templateFunctions_sideBarListTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\n\n    Object(_mainDisplayController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addListToSidebar);\n\n\n//# sourceURL=webpack:///./src/domFunctions/addListToSidebar.js?");

/***/ }),

/***/ "./src/domFunctions/addTask.js":
/*!*************************************!*\
  !*** ./src/domFunctions/addTask.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateFunctions_taskListTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templateFunctions/taskListTemplate */ \"./src/templateFunctions/taskListTemplate.js\");\n\n\nfunction addTask(list, taskGenerator) {\n  const newTaskButton = document.querySelector('#add-task');\n  const tasks = document.querySelector('#tasks');\n\n  newTaskButton.addEventListener('click', () => {\n    const taskName = document.querySelector('#task-name');\n    const taskDescription = document.querySelector('#task-description');\n    const newTask = taskGenerator(taskName.value, taskDescription.value);\n\n    list.addTasks(newTask);\n    tasks.innerHTML += Object(_templateFunctions_taskListTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newTask);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTask);\n\n\n//# sourceURL=webpack:///./src/domFunctions/addTask.js?");

/***/ }),

/***/ "./src/domFunctions/cancelList.js":
/*!****************************************!*\
  !*** ./src/domFunctions/cancelList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainDisplayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDisplayController */ \"./src/domFunctions/mainDisplayController.js\");\n\n\nfunction cancelList() {\n  const cancelButton = document.querySelector('#cancel-list');\n\n  cancelButton.addEventListener('click', () => {\n    Object(_mainDisplayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('');\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cancelList);\n\n\n//# sourceURL=webpack:///./src/domFunctions/cancelList.js?");

/***/ }),

/***/ "./src/domFunctions/mainDisplayController.js":
/*!***************************************************!*\
  !*** ./src/domFunctions/mainDisplayController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mainDisplayController(content) {\n  const mainDisplay = document.querySelector('main');\n\n  mainDisplay.innerHTML = content;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainDisplayController);\n\n\n//# sourceURL=webpack:///./src/domFunctions/mainDisplayController.js?");

/***/ }),

/***/ "./src/domFunctions/newList.js":
/*!*************************************!*\
  !*** ./src/domFunctions/newList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateFunctions_newListForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templateFunctions/newListForm */ \"./src/templateFunctions/newListForm.js\");\n/* harmony import */ var _cancelList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelList */ \"./src/domFunctions/cancelList.js\");\n/* harmony import */ var _addListToSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addListToSidebar */ \"./src/domFunctions/addListToSidebar.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ \"./src/domFunctions/addTask.js\");\n/* harmony import */ var _mainDisplayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainDisplayController */ \"./src/domFunctions/mainDisplayController.js\");\n\n\n\n\n\n\nfunction newList(listGenerator, taskGenerator, masterList) {\n  const newListInput = document.querySelector('#new-list');\n\n  newListInput.addEventListener('click', () => {\n    const list = Object.seal(listGenerator());\n    Object(_mainDisplayController__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateFunctions_newListForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n    Object(_addListToSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list, masterList);\n    Object(_cancelList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    Object(_addTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(list, taskGenerator);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newList);\n\n\n//# sourceURL=webpack:///./src/domFunctions/newList.js?");

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/*! exports provided: guiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"guiModule\", function() { return guiModule; });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n/* harmony import */ var _domFunctions_newList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFunctions/newList */ \"./src/domFunctions/newList.js\");\n\n\n\nconst guiModule = function(listGenerator, taskGenerator) {\n  const defaultLists = [];\n\n  defaultLists.push(Object(_lists__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().lists[0].returnList());\n  localStorage.setItem('lists', JSON.stringify(defaultLists));\n\n  console.log(defaultLists);\n\n  Object(_domFunctions_newList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listGenerator, taskGenerator, defaultLists);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gui.js?");

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

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newListGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newListGenerator */ \"./src/newListGenerator.js\");\n/* harmony import */ var _newTaskGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTaskGenerator */ \"./src/newTaskGenerator.js\");\n\n\n\nfunction listStorage(list) {\n  const lists = [];\n\n  const defaultLists = () => {\n    const defaultTask = Object(_newTaskGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      'Example Task',\n      'This is where you put a slight description on the task at hand'\n    );\n\n    const defaultList = Object(_newListGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Example List');\n    defaultList.addTasks(defaultTask);\n    lists.push(defaultList);\n  };\n\n  const addList = () => {\n    lists.push(list);\n  };\n\n  defaultLists();\n\n  return {\n    addList,\n    lists,\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listStorage);\n\n\n//# sourceURL=webpack:///./src/lists.js?");

/***/ }),

/***/ "./src/newListGenerator.js":
/*!*********************************!*\
  !*** ./src/newListGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction newList(nameInput = '') {\n  let name = nameInput;\n  const tasks = [];\n\n  const setName = newName => {\n    name = newName;\n  };\n\n  const addTasks = taskList => {\n    tasks.push(taskList);\n  };\n\n  const returnList = () => ({\n    name,\n    tasks,\n  });\n\n  return {\n    addTasks,\n    setName,\n    returnList,\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newList);\n\n\n//# sourceURL=webpack:///./src/newListGenerator.js?");

/***/ }),

/***/ "./src/newTaskGenerator.js":
/*!*********************************!*\
  !*** ./src/newTaskGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction newTask(name, description) {\n  return {\n    name,\n    description,\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newTask);\n\n\n//# sourceURL=webpack:///./src/newTaskGenerator.js?");

/***/ }),

/***/ "./src/templateFunctions/newListForm.js":
/*!**********************************************!*\
  !*** ./src/templateFunctions/newListForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTaskTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskTemplate */ \"./src/templateFunctions/newTaskTemplate.js\");\n\n\nconst listForm = /* template */ `\n  <h4>New List</h4>\n\n  <div>\n    <label for=\"list-name\">Name</label>\n    <input id='list-name' type=\"text\" name='list-name'>\n  </div>\n\n  <div id='tasks'></div>\n\n  <div>\n    ${_newTaskTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\n  </div>\n\n\n  <button id='create-list'>Save List</button>\n  <button id='cancel-list'>Cancel</button>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listForm);\n\n\n//# sourceURL=webpack:///./src/templateFunctions/newListForm.js?");

/***/ }),

/***/ "./src/templateFunctions/newTaskTemplate.js":
/*!**************************************************!*\
  !*** ./src/templateFunctions/newTaskTemplate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst taskForm = /* template */ `\n  <div>\n    <label for=\"task-name\">Task</label>\n    <input id='task-name' type=\"text\" name='task-name'>\n  </div>\n\n  <div>\n    <label for=\"task-description\">Description</label>\n    <input id='task-description' type=\"text\" name='task-description'>\n  </div>\n\n  <button id='add-task'>Add Task</button>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskForm);\n\n\n//# sourceURL=webpack:///./src/templateFunctions/newTaskTemplate.js?");

/***/ }),

/***/ "./src/templateFunctions/sideBarListTemplate.js":
/*!******************************************************!*\
  !*** ./src/templateFunctions/sideBarListTemplate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sideBarListTemplate(list) {\n  return /* template */ `\n  <p>${list.returnList().name}</p>\n`;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sideBarListTemplate);\n\n\n//# sourceURL=webpack:///./src/templateFunctions/sideBarListTemplate.js?");

/***/ }),

/***/ "./src/templateFunctions/taskListTemplate.js":
/*!***************************************************!*\
  !*** ./src/templateFunctions/taskListTemplate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction taskList(task) {\n  return /* template */ `\n  <p>${task.name}</p>\n  <p>${task.description}</p>\n`;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskList);\n\n\n//# sourceURL=webpack:///./src/templateFunctions/taskListTemplate.js?");

/***/ })

/******/ });
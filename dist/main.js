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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        this.arr = arr\n    }\n\n\n    html(str) {\n        if (typeof str ==='undefined') {\n            return this.arr[0].innerHTML\n        }else {\n            this.arr.forEach(ele => {\n               ele.innerHTML = str\n            })\n        }\n    };\n\n    empty() {\n        this.arr.forEach(ele => {\n            ele.innerHTML = \"\";\n        })\n    };\n\n    append(...args) { // ul.append(<p style=\"background-color: red;\">This is a p element.</p>)\n        this.arr.forEach(function(outerEle) { // <li>List 1</li> -- outerEle\n            args.forEach(function(innerEle) {    // <a></a> -- innerEle\n\n                if (innerEle instanceof HTMLElement) { // <p style=\"background-color: red;\">This is a p element.</p> -- innerEle\n                    outerEle.innerHTML += innerEle.outerHTML;\n                } else if (innerEle instanceof DOMNodeCollection) {  // DOMNodeCollection {arr: Array(2)} -- innerEle\n                    innerEle.arr.forEach(function(innerEle) { // [li, li] -- innerEle.arr\n                        outerEle.innerHTML += innerEle.outerHTML;\n                    })\n                } else if (typeof innerEle === 'string') { // 'a' -- innerEle\n                    outerEle.innerHTML += innerEle;\n                }\n            })\n            \n        })\n    }\n\n\n    children(){\n        \n    }\n\n    \n\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n    if (typeof arg === 'string') {\n        let nodeList = document.querySelectorAll(arg);\n        let arrNodeList = Array.prototype.slice.call(nodeList);\n        return new DOMNodeCollection(arrNodeList);\n    } else if (arg instanceof HTMLElement) {\n        return new DOMNodeCollection([arg]);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
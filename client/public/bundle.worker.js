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

/***/ "./node_modules/react-pdf/dist/esm/pdf.worker.entry.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/pdf.worker.entry.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * PDF.js Worker entry file.\n *\n * This file is identical to Mozilla's pdf.worker.entry.js, with one exception being placed inside\n * this bundle, not theirs. This file can be safely removed and replaced with Mozilla's after the\n * issue mentioned below has been resolved on Parcel's side.\n * See: https://github.com/parcel-bundler/parcel/issues/670\n */\n(typeof window !== 'undefined' ? window : {}).pdfjsWorker = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.js */ \"./node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.js\");\n\n//# sourceURL=webpack://portfolio2/./node_modules/react-pdf/dist/esm/pdf.worker.entry.js?");

/***/ }),

/***/ "./node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.js ***!
  \****************************************************************************/
/***/ (function(module) {


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/react-pdf/dist/esm/pdf.worker.entry.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gallery-items.js":
/*!******************************!*\
  !*** ./src/gallery-items.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg\",\n  description: \"Hokkaido Flower\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg\",\n  description: \"Container Haulage Freight\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg\",\n  description: \"Aerial Beach View\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg\",\n  description: \"Flower Blooms\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg\",\n  description: \"Alpine Mountains\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg\",\n  description: \"Mountain Lake Sailing\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg\",\n  description: \"Alpine Spring Meadows\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg\",\n  description: \"Nature Landscape\"\n}, {\n  preview: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg\",\n  original: \"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg\",\n  description: \"Lighthouse Coast Sea\"\n}]);\n\n//# sourceURL=webpack://goit-js-hw-08-gallery/./src/gallery-items.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-items.js */ \"./src/gallery-items.js\");\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refs */ \"./src/refs.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n\n\n\nvar counter = 0;\nvar galleryMarkup = _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.default.map(function (_ref) {\n  var description = _ref.description,\n      original = _ref.original,\n      preview = _ref.preview;\n  return \"\\n        <li class=\\\"gallery__item\\\">\\n          <a\\n            class=\\\"gallery__link\\\"\\n            href=\\\"\".concat(original, \"\\\"\\n            >\\n            <img\\n              class=\\\"gallery__image\\\"\\n              src=\\\"\").concat(preview, \"\\\"\\n              data-source=\\\"\").concat(original, \"\\\"\\n              alt=\\\"\").concat(description, \"\\\"\\n            />\\n          </a>\\n        </li>\");\n}).join(\"\");\n_refs__WEBPACK_IMPORTED_MODULE_1__.default.gallery.insertAdjacentHTML(\"beforeend\", galleryMarkup);\n_refs__WEBPACK_IMPORTED_MODULE_1__.default.gallery.addEventListener(\"click\", omImageOpen);\n_refs__WEBPACK_IMPORTED_MODULE_1__.default.closeBtn.addEventListener(\"click\", onImageClose);\n_refs__WEBPACK_IMPORTED_MODULE_1__.default.overlay.addEventListener(\"click\", onImageClose);\nwindow.addEventListener(\"keydown\", onScrollPress);\n\nfunction omImageOpen(event) {\n  event.preventDefault();\n\n  if (event.target.nodeName === \"IMG\") {\n    _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightbox.classList.add(\"is-open\");\n    _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightboxImg.src = event.target.dataset.source;\n    window.addEventListener(\"keydown\", onEscPress);\n    calculateCounter(event);\n  }\n}\n\nfunction onImageClose() {\n  _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightbox.classList.remove(\"is-open\");\n  _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightboxImg.src = \"\";\n  window.removeEventListener(\"keydown\", onEscPress);\n}\n\nfunction onEscPress(event) {\n  if (event.code === \"Escape\") {\n    onImageClose();\n  }\n}\n\nfunction onScrollPress(event) {\n  if (event.code === \"ArrowLeft\") {\n    calculateCounter(event);\n\n    if (counter === 0) {\n      counter = _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.default.length - 1;\n      setNewImage(counter);\n    } else {\n      counter -= 1;\n      setNewImage(counter);\n    }\n  }\n\n  if (event.code === \"ArrowRight\") {\n    calculateCounter(event);\n\n    if (counter === _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.default.length - 1) {\n      counter = 0;\n      setNewImage(counter);\n    } else {\n      counter += 1;\n      setNewImage(counter);\n    }\n  }\n}\n\nfunction setNewImage(counter) {\n  _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightboxImg.src = \"\";\n  _refs__WEBPACK_IMPORTED_MODULE_1__.default.lightboxImg.src = _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.default[counter].original;\n}\n\nfunction calculateCounter(event) {\n  _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.default.map(function (_ref2, i) {\n    var original = _ref2.original;\n\n    if (event.srcElement.href === original) {\n      counter = i;\n      event.srcElement.href = \"\";\n    }\n  });\n}\n\n//# sourceURL=webpack://goit-js-hw-08-gallery/./src/index.js?");

/***/ }),

/***/ "./src/refs.js":
/*!*********************!*\
  !*** ./src/refs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  gallery: document.querySelector(\".js-gallery\"),\n  lightbox: document.querySelector(\".lightbox\"),\n  closeBtn: document.querySelector(\"button[data-action='close-lightbox']\"),\n  lightboxImg: document.querySelector(\"img.lightbox__image\"),\n  overlay: document.querySelector(\"div.lightbox__overlay\")\n});\n\n//# sourceURL=webpack://goit-js-hw-08-gallery/./src/refs.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://goit-js-hw-08-gallery/./src/css/styles.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
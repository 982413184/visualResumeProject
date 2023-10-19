/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


/**
 * @desc electron 主入口
 */
var path = __webpack_require__(/*! path */ "path");
var _require = __webpack_require__(/*! electron */ "electron"),
  app = _require.app,
  BrowserWindow = _require.BrowserWindow,
  ipcMain = _require.ipcMain;
var ROOT_PATH = path.join(app.getAppPath(), '../');
ipcMain.on('get-root-path', function (event, arg) {
  event.reply('reply-root-path', ROOT_PATH);
});
function isDev() {
  return "development" === 'development';
}
function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      //注入node模块
      contextIsolation: false
    }
  });
  if (isDev()) {
    mainWindow.loadURL("http://127.0.0.1:7001");
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }
}
app.whenReady().then(function () {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDO0FBQzVCLElBQUFDLFFBQUEsR0FBd0NELG1CQUFPLENBQUMsMEJBQVUsQ0FBQztFQUFuREUsR0FBRyxHQUFBRCxRQUFBLENBQUhDLEdBQUc7RUFBRUMsYUFBYSxHQUFBRixRQUFBLENBQWJFLGFBQWE7RUFBRUMsT0FBTyxHQUFBSCxRQUFBLENBQVBHLE9BQU87QUFFbkMsSUFBTUMsU0FBUyxHQUFHTixJQUFJLENBQUNPLElBQUksQ0FBQ0osR0FBRyxDQUFDSyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUVwREgsT0FBTyxDQUFDSSxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQUNDLEtBQUssRUFBRUMsR0FBRyxFQUFLO0VBQzFDRCxLQUFLLENBQUNFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRU4sU0FBUyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUVGLFNBQVNPLEtBQUtBLENBQUEsRUFBRztFQUNmLE9BQU9DLGFBQW9CLEtBQUssYUFBYTtBQUMvQztBQUVBLFNBQVNHLFlBQVlBLENBQUEsRUFBRztFQUN0QjtFQUNBLElBQU1DLFVBQVUsR0FBRyxJQUFJZCxhQUFhLENBQUM7SUFDbkNlLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxHQUFHO0lBQ1hDLGNBQWMsRUFBRTtNQUNkQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxlQUFlLEVBQUUsSUFBSTtNQUFFO01BQ3ZCQyxnQkFBZ0IsRUFBRTtJQUNwQjtFQUNGLENBQUMsQ0FBQztFQUVGLElBQUlYLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDWEssVUFBVSxDQUFDTyxPQUFPLHdCQUF3QixDQUFDO0VBQzdDLENBQUMsTUFBTTtJQUNMUCxVQUFVLENBQUNPLE9BQU8sV0FBQUMsTUFBQSxDQUFXMUIsSUFBSSxDQUFDTyxJQUFJLENBQUNvQixTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBRSxDQUFDO0VBQzVFO0FBQ0Y7QUFFQXhCLEdBQUcsQ0FBQ3lCLFNBQVMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFNO0VBQ3pCWixZQUFZLENBQUMsQ0FBQztFQUNkZCxHQUFHLENBQUNNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWTtJQUM3QixJQUFJTCxhQUFhLENBQUMwQixhQUFhLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFZCxZQUFZLENBQUMsQ0FBQztFQUNoRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc1Jlc3VtZU1vb2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdmlzUmVzdW1lTW9vay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Zpc1Jlc3VtZU1vb2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlzUmVzdW1lTW9vay8uL2FwcC9tYWluL2VsZWN0cm9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBAZGVzYyBlbGVjdHJvbiDkuLvlhaXlj6NcclxuICovXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93LCBpcGNNYWluIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xyXG5cclxuY29uc3QgUk9PVF9QQVRIID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcuLi8nKTtcclxuXHJcbmlwY01haW4ub24oJ2dldC1yb290LXBhdGgnLCAoZXZlbnQsIGFyZykgPT4ge1xyXG4gIGV2ZW50LnJlcGx5KCdyZXBseS1yb290LXBhdGgnLCBST09UX1BBVEgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkgeyBcclxuICAvLyDliJvlu7rmtY/op4jlmajnqpflj6NcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsIC8v5rOo5YWlbm9kZeaooeWdl1xyXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RldigpKSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly8xMjcuMC4wLjE6NzAwMWApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcclxuICBjcmVhdGVXaW5kb3coKTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJfcmVxdWlyZSIsImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJpcGNNYWluIiwiUk9PVF9QQVRIIiwiam9pbiIsImdldEFwcFBhdGgiLCJvbiIsImV2ZW50IiwiYXJnIiwicmVwbHkiLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwiZGV2VG9vbHMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwibG9hZFVSTCIsImNvbmNhdCIsIl9fZGlybmFtZSIsIndoZW5SZWFkeSIsInRoZW4iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==
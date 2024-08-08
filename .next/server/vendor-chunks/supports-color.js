"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nvar argv = process.argv;\n\nvar terminator = argv.indexOf('--');\nvar hasFlag = function (flag) {\n\tflag = '--' + flag;\n\tvar pos = argv.indexOf(flag);\n\treturn pos !== -1 && (terminator !== -1 ? pos < terminator : true);\n};\n\nmodule.exports = (function () {\n\tif ('FORCE_COLOR' in process.env) {\n\t\treturn true;\n\t}\n\n\tif (hasFlag('no-color') ||\n\t\thasFlag('no-colors') ||\n\t\thasFlag('color=false')) {\n\t\treturn false;\n\t}\n\n\tif (hasFlag('color') ||\n\t\thasFlag('colors') ||\n\t\thasFlag('color=true') ||\n\t\thasFlag('color=always')) {\n\t\treturn true;\n\t}\n\n\tif (process.stdout && !process.stdout.isTTY) {\n\t\treturn false;\n\t}\n\n\tif (process.platform === 'win32') {\n\t\treturn true;\n\t}\n\n\tif ('COLORTERM' in process.env) {\n\t\treturn true;\n\t}\n\n\tif (process.env.TERM === 'dumb') {\n\t\treturn false;\n\t}\n\n\tif (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {\n\t\treturn true;\n\t}\n\n\treturn false;\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpZmFseC8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcz9kN2M0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBhcmd2ID0gcHJvY2Vzcy5hcmd2O1xuXG52YXIgdGVybWluYXRvciA9IGFyZ3YuaW5kZXhPZignLS0nKTtcbnZhciBoYXNGbGFnID0gZnVuY3Rpb24gKGZsYWcpIHtcblx0ZmxhZyA9ICctLScgKyBmbGFnO1xuXHR2YXIgcG9zID0gYXJndi5pbmRleE9mKGZsYWcpO1xuXHRyZXR1cm4gcG9zICE9PSAtMSAmJiAodGVybWluYXRvciAhPT0gLTEgPyBwb3MgPCB0ZXJtaW5hdG9yIDogdHJ1ZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG5cdGlmICgnRk9SQ0VfQ09MT1InIGluIHByb2Nlc3MuZW52KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRcdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdFx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHByb2Nlc3Muc3Rkb3V0ICYmICFwcm9jZXNzLnN0ZG91dC5pc1RUWSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gcHJvY2Vzcy5lbnYpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChwcm9jZXNzLmVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QocHJvY2Vzcy5lbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;
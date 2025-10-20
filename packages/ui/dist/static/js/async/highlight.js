"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["highlight"], {
"./src/utils/highlight/config.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  highlighter: () => (highlighter)
});
/* ESM import */var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/highlight.js/es/core.js");
/* ESM import */var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/highlight.js/es/languages/json.js");
/* ESM import */var _languages_stacktrace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/highlight/languages/stacktrace.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('json', highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_1__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('stacktrace', _languages_stacktrace__WEBPACK_IMPORTED_MODULE_2__.stacktraceJS);
const highlighter = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"];

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/utils/highlight/languages/stacktrace.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  stacktraceJS: () => (stacktraceJS)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/*
Language: StacktraceJS
Author: FelixMosh
Description: Node stacktrace highlighter
*/ function stacktraceJS() {
    const ERROR = {
        className: 'type',
        begin: /^\w*Error:\s*/,
        relevance: 40,
        contains: [
            {
                className: 'title',
                begin: /.*/,
                end: /$/,
                excludeStart: true,
                endsWithParent: true
            }
        ]
    };
    const LINE_NUMBER = {
        className: 'number',
        begin: ':\\d+:\\d+',
        relevance: 5
    };
    const TRACE_LINE = {
        className: 'trace-line',
        begin: /^\s*at/,
        end: /$/,
        keywords: 'at as async prototype anonymous function',
        contains: [
            {
                className: 'code-path',
                begin: /\(/,
                end: /\)$/,
                excludeEnd: true,
                excludeBegin: true,
                contains: [
                    LINE_NUMBER
                ]
            }
        ]
    };
    return {
        case_insensitive: true,
        contains: [
            ERROR,
            TRACE_LINE,
            LINE_NUMBER
        ]
    };
}

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=highlight.js.map
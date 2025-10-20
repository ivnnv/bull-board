"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_components_Form_JsonField_JsonField_tsx-src_components_Modal_Modal_tsx"], {
"./src/components/Form/JsonField/JsonField.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JsonField: () => (JsonField)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _JsonEditor_JsonEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/JsonEditor/JsonEditor.tsx");
/* ESM import */var _Field_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Field/Field.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




const JsonField = (param)=>{
    let { label, id, value, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Field_Field__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: label,
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JsonEditor_JsonEditor__WEBPACK_IMPORTED_MODULE_2__.JsonEditor, {
            doc: value || {},
            id: id,
            ...rest
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/JsonField/JsonField.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/JsonField/JsonField.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, undefined);
};
_c = JsonField;
var _c;
$RefreshReg$(_c, "JsonField");

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
"./src/components/JsonEditor/JsonEditor.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JsonEditor: () => (JsonEditor)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@codemirror/autocomplete/dist/index.js");
/* ESM import */var _codemirror_commands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/@codemirror/commands/dist/index.js");
/* ESM import */var _codemirror_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@codemirror/language/dist/index.js");
/* ESM import */var _codemirror_lint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/@codemirror/lint/dist/index.js");
/* ESM import */var _codemirror_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/@codemirror/state/dist/index.js");
/* ESM import */var _codemirror_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@codemirror/view/dist/index.js");
/* ESM import */var _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@lezer/highlight/dist/index.js");
/* ESM import */var codemirror_json_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/codemirror-json-schema/dist/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();









const customStyle = _codemirror_language__WEBPACK_IMPORTED_MODULE_4__.HighlightStyle.define([
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.atom,
        color: 'var(--hl-keyword)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.keyword,
        color: 'var(--hl-keyword)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.bool,
        color: 'var(--hl-keyword)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.string,
        color: 'var(--hl-string)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.number,
        color: 'var(--hl-number)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.brace,
        color: 'var(--accent-color-d1)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.punctuation,
        color: 'var(--accent-color-d1)'
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_1__.tags.propertyName,
        color: 'var(--hl-type)'
    }
]);
const theme = _codemirror_view__WEBPACK_IMPORTED_MODULE_5__.EditorView.theme({
    '&': {
        height: '200px',
        backgroundColor: 'var(--input-bg)',
        border: '1px var(--input-border) solid',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        marginTop: '0.25rem',
        fontSize: '0.875rem',
        transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out'
    },
    '&.cm-focused': {
        outline: 'none',
        borderColor: 'var(--input-focus-border)',
        boxShadow: 'var(--input-focus-shadow)'
    },
    '.cm-gutters': {
        borderRadius: '0.375rem 0 0 0.375rem',
        backgroundColor: 'var(--json-edit-gutter-bg)',
        color: 'inherit',
        borderRight: 'var(--json-edit-gutter-border-color)'
    },
    '.cm-cursor': {
        borderLeftColor: 'var(--json-edit-cursor-color)'
    },
    '.cm-activeLineGutter': {
        backgroundColor: 'var(--json-edit-gutter-active-bg)'
    },
    '.cm-scroller': {
        overflow: 'auto'
    },
    '.cm-tooltip': {
        padding: '0.25rem 0.5rem',
        borderRadius: '0.275rem',
        backgroundColor: 'var(--json-edit-tooltip-bg)',
        border: '1px solid var(--json-edit-tooltip-border-color)'
    },
    '.cm6-json-schema-hover--code > p': {
        margin: '0.5em 0'
    },
    '.cm-tooltip-above .cm-tooltip-arrow:before': {
        borderTop: '7px solid var(--json-edit-tooltip-border-color)'
    },
    '.cm-tooltip-above .cm-tooltip-arrow:after': {
        borderTop: '7px solid var(--json-edit-tooltip-bg)'
    },
    '.cm-selectionBackground': {
        background: 'var(--json-edit-selection-bg)!important'
    }
});
const commonExtensions = [
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_5__.gutter)({
        class: 'CodeMirror-lint-markers'
    }),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.bracketMatching)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_5__.highlightActiveLineGutter)(),
    // basicSetup,
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_6__.closeBrackets)(),
    (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_7__.history)(),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_6__.autocompletion)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_5__.lineNumbers)(),
    (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_8__.lintGutter)(),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.indentOnInput)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_5__.drawSelection)(),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.foldGutter)(),
    _codemirror_view__WEBPACK_IMPORTED_MODULE_5__.keymap.of([
        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_6__.closeBracketsKeymap,
        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_7__.defaultKeymap,
        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_7__.historyKeymap,
        ..._codemirror_language__WEBPACK_IMPORTED_MODULE_4__.foldKeymap,
        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_6__.completionKeymap,
        ..._codemirror_lint__WEBPACK_IMPORTED_MODULE_8__.lintKeymap
    ]),
    _codemirror_view__WEBPACK_IMPORTED_MODULE_5__.EditorView.lineWrapping,
    _codemirror_state__WEBPACK_IMPORTED_MODULE_9__.EditorState.tabSize.of(2),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.syntaxHighlighting)(customStyle),
    theme
];
const External = _codemirror_state__WEBPACK_IMPORTED_MODULE_9__.Annotation.define();
const JsonEditor = (param)=>{
    let { doc, schema, ...inputProps } = param;
    _s();
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [editor, setEditor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const onUpdate = _codemirror_view__WEBPACK_IMPORTED_MODULE_5__.EditorView.updateListener.of((vu)=>{
            if (!inputRef.current) {
                return;
            }
            const errorCount = (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_8__.diagnosticCount)(vu.state);
            if (!vu.docChanged && // waits for linter
            !vu.transactions.some((tr)=>tr.annotation(External)) && errorCount === 0) {
                const doc = vu.state.doc;
                inputRef.current.value = doc.toString();
            } else if (errorCount > 0) {
                inputRef.current.value = '';
            }
        });
        const state = _codemirror_state__WEBPACK_IMPORTED_MODULE_9__.EditorState.create({
            doc: JSON.stringify(doc, null, 2),
            extensions: [
                commonExtensions,
                onUpdate,
                (0,codemirror_json_schema__WEBPACK_IMPORTED_MODULE_2__.jsonSchema)(schema || {})
            ]
        });
        const editor = new _codemirror_view__WEBPACK_IMPORTED_MODULE_5__.EditorView({
            state,
            parent: editorRef.current
        });
        setEditor(editor);
        return ()=>editor.destroy();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (editor) {
            (0,codemirror_json_schema__WEBPACK_IMPORTED_MODULE_2__.updateSchema)(editor, schema || {});
        }
    }, schema ? [
        schema
    ] : []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                ref: editorRef
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/JsonEditor/JsonEditor.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "hidden",
                ref: inputRef,
                ...inputProps
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/JsonEditor/JsonEditor.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(JsonEditor, "4kPHc7EHKNBuECxJKhJql7iBMkA=");
_c = JsonEditor;
var _c;
$RefreshReg$(_c, "JsonEditor");

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
"./src/components/Modal/Modal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Modal: () => (Modal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@radix-ui/react-dialog/dist/index.mjs");
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/clsx/dist/clsx.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Button/Button.tsx");
/* ESM import */var _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Modal/Modal.module.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();






const Modal = (param)=>{
    let { open, title, onClose, children, width, actionButton } = param;
    _s();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const closeOnOpenChange = (open)=>{
        if (!open) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Root, {
        open: open,
        modal: true,
        onOpenChange: closeOnOpenChange,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Portal, {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Overlay, {
                    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].overlay
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Content, {
                    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].contentWrapper,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].content, _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"][width || '']),
                        children: [
                            !!title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Title, {
                                children: title
                            }, void 0, false, {
                                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Description, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].description,
                                    children: children
                                }, void 0, false, {
                                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_5__["default"].actions,
                                children: [
                                    actionButton,
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_6__.Close, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                            theme: "basic",
                                            children: t('MODAL.CLOSE_BTN')
                                        }, void 0, false, {
                                            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Modal/Modal.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, undefined);
};
_s(Modal, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation
    ];
});
_c = Modal;
var _c;
$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=src_components_Form_JsonField_JsonField_tsx-src_components_Modal_Modal_tsx.js.map
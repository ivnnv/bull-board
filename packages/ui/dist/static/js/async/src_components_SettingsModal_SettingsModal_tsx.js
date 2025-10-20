"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_components_SettingsModal_SettingsModal_tsx"], {
"./src/components/Form/Field/Field.module.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"field":"src-components-Form-Field-Field-module__field-JbAWJt","inline":"src-components-Form-Field-Field-module__inline-vXG0Za"});
    if(true) {
      (function() {
        var localsJsonString = "{\"field\":\"src-components-Form-Field-Field-module__field-JbAWJt\",\"inline\":\"src-components-Form-Field-Field-module__inline-vXG0Za\"}";
        // 1756647378733
        var cssReload = (__webpack_require__("../../node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/components/Form/SwitchField/SwitchField.module.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"switch":"src-components-Form-SwitchField-SwitchField-module__switch-DOdNhn","thumb":"src-components-Form-SwitchField-SwitchField-module__thumb-tvm2sT"});
    if(true) {
      (function() {
        var localsJsonString = "{\"switch\":\"src-components-Form-SwitchField-SwitchField-module__switch-DOdNhn\",\"thumb\":\"src-components-Form-SwitchField-SwitchField-module__thumb-tvm2sT\"}";
        // 1756647378727
        var cssReload = (__webpack_require__("../../node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"../api/dist/constants/statuses.js": (function (module, exports, __webpack_require__) {
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STATUSES = void 0;
exports.STATUSES = {
    latest: 'latest',
    active: 'active',
    waiting: 'waiting',
    waitingChildren: 'waiting-children',
    prioritized: 'prioritized',
    completed: 'completed',
    failed: 'failed',
    delayed: 'delayed',
    paused: 'paused',
};
//# sourceMappingURL=statuses.js.map
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
"./src/components/Form/Field/Field.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Field: () => (Field)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/clsx/dist/clsx.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _Field_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Field/Field.module.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




const Field = (param)=>{
    let { label, id, inline, children } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_Field_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].field, {
            [_Field_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].inline]: inline
        }),
        children: [
            !!label && !inline && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: id,
                children: label
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/Field/Field.tsx",
                lineNumber: 13,
                columnNumber: 28
            }, undefined),
            children,
            !!label && inline && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: id,
                children: label
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/Field/Field.tsx",
                lineNumber: 15,
                columnNumber: 27
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/Field/Field.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, undefined);
};
_c = Field;
var _c;
$RefreshReg$(_c, "Field");

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
"./src/components/Form/InputField/InputField.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InputField: () => (InputField)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _Field_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Field/Field.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const InputField = (param)=>{
    let { label, id, ...inputProps } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Field_Field__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: label,
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            id: id,
            type: "text",
            ...inputProps
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/InputField/InputField.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/InputField/InputField.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, undefined);
};
_c = InputField;
var _c;
$RefreshReg$(_c, "InputField");

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
"./src/components/Form/SelectField/SelectField.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectField: () => (SelectField)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _Field_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Field/Field.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const SelectField = (param)=>{
    let { label, id, options, ...selectProps } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Field_Field__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: label,
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            id: id,
            ...selectProps,
            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: option.value,
                    children: option.text
                }, option.value, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SelectField/SelectField.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, undefined))
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SelectField/SelectField.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SelectField/SelectField.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, undefined);
};
_c = SelectField;
var _c;
$RefreshReg$(_c, "SelectField");

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
"./src/components/Form/SwitchField/SwitchField.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SwitchField: () => (SwitchField)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@radix-ui/react-switch/dist/index.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _Field_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Field/Field.tsx");
/* ESM import */var _SwitchField_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/SwitchField/SwitchField.module.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const SwitchField = (param)=>{
    let { label, id, ...switchProps } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Field_Field__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: label,
        id: id,
        inline: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__.Root, {
            id: id,
            ...switchProps,
            className: _SwitchField_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]["switch"],
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_4__.Thumb, {
                className: _SwitchField_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].thumb
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SwitchField/SwitchField.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SwitchField/SwitchField.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/Form/SwitchField/SwitchField.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, undefined);
};
_c = SwitchField;
var _c;
$RefreshReg$(_c, "SwitchField");

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
"./src/components/SettingsModal/SettingsModal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SettingsModal: () => (SettingsModal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var _constants_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/constants/languages.ts");
/* ESM import */var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/useSettings.ts");
/* ESM import */var _hooks_useUIConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/hooks/useUIConfig.ts");
/* ESM import */var _Form_InputField_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Form/InputField/InputField.tsx");
/* ESM import */var _Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Form/SelectField/SelectField.tsx");
/* ESM import */var _Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Form/SwitchField/SwitchField.tsx");
/* ESM import */var _Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Modal/Modal.tsx");
/* ESM import */var _hooks_useDetailsTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/hooks/useDetailsTabs.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();










const pollingIntervals = [
    -1,
    3,
    5,
    10,
    20,
    60,
    60 * 5,
    60 * 15
];
const maxJobsPerPage = 300;
const SettingsModal = (param)=>{
    let { open, onClose } = param;
    _s();
    const { language, pollingInterval, jobsPerPage, confirmQueueActions, confirmJobActions, collapseJob, collapseJobData, collapseJobOptions, collapseJobError, defaultJobTab, darkMode, setSettings } = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__.useSettingsStore)((state)=>state);
    const { pollingInterval: uiConfigPollingInterval } = (0,_hooks_useUIConfig__WEBPACK_IMPORTED_MODULE_5__.useUIConfig)();
    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__.Modal, {
        width: "small",
        open: open,
        onClose: onClose,
        title: t('SETTINGS.TITLE'),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_7__.SelectField, {
                label: t('SETTINGS.LANGUAGE'),
                id: "language",
                options: _constants_languages__WEBPACK_IMPORTED_MODULE_3__.languages.map((lng)=>({
                        text: lng,
                        value: lng
                    })),
                value: language,
                onChange: (event)=>{
                    i18n.changeLanguage(event.target.value);
                    setSettings({
                        language: event.target.value
                    });
                }
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, undefined),
            (uiConfigPollingInterval === null || uiConfigPollingInterval === void 0 ? void 0 : uiConfigPollingInterval.showSetting) !== false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_7__.SelectField, {
                label: t('SETTINGS.POLLING_INTERVAL'),
                id: "polling-interval",
                options: pollingIntervals.map((interval)=>({
                        text: interval < 0 ? t('SETTINGS.POLLING_OPTIONS.OFF') : Math.floor(interval / 60) === 0 ? t('SETTINGS.POLLING_OPTIONS.SECS', {
                            count: interval
                        }) : t('SETTINGS.POLLING_OPTIONS.MINS', {
                            count: interval / 60
                        }),
                        value: `${interval}`
                    })),
                value: `${pollingInterval}`,
                onChange: (event)=>setSettings({
                        pollingInterval: +event.target.value
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_7__.SelectField, {
                label: t('SETTINGS.DEFAULT_JOB_TAB'),
                id: "default-job-tab",
                options: [
                    'default'
                ].concat(_hooks_useDetailsTabs__WEBPACK_IMPORTED_MODULE_10__.availableJobTabs).map((tab)=>({
                        text: t(`JOB.TABS.${tab.toUpperCase()}`),
                        value: tab
                    })),
                value: defaultJobTab,
                onChange: (event)=>setSettings({
                        defaultJobTab: event.target.value
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_InputField_InputField__WEBPACK_IMPORTED_MODULE_6__.InputField, {
                label: t('SETTINGS.JOBS_PER_PAGE'),
                id: "jobs-per-page",
                value: jobsPerPage,
                type: "number",
                min: "1",
                max: maxJobsPerPage,
                maxLength: 3,
                onChange: (event)=>{
                    const jobsPerPage = +event.target.value;
                    setSettings({
                        jobsPerPage: Math.min(jobsPerPage, maxJobsPerPage)
                    });
                }
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.CONFIRM_QUEUE_ACTIONS'),
                id: "confirm-queue-actions",
                checked: confirmQueueActions,
                onCheckedChange: (checked)=>setSettings({
                        confirmQueueActions: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.CONFIRM_JOB_ACTIONS'),
                id: "confirm-job-actions",
                checked: confirmJobActions,
                onCheckedChange: (checked)=>setSettings({
                        confirmJobActions: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.COLLAPSE_JOB'),
                id: "collapse-job",
                checked: collapseJob,
                onCheckedChange: (checked)=>setSettings({
                        collapseJob: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.COLLAPSE_JOB_DATA'),
                id: "collapse-job-data",
                checked: collapseJobData,
                onCheckedChange: (checked)=>setSettings({
                        collapseJobData: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.COLLAPSE_JOB_OPTIONS'),
                id: "collapse-job-options",
                checked: collapseJobOptions,
                onCheckedChange: (checked)=>setSettings({
                        collapseJobOptions: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.COLLAPSE_JOB_ERROR'),
                id: "collapse-job-error",
                checked: collapseJobError,
                onCheckedChange: (checked)=>setSettings({
                        collapseJobError: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SwitchField_SwitchField__WEBPACK_IMPORTED_MODULE_8__.SwitchField, {
                label: t('SETTINGS.DARK_MODE'),
                id: "dark-mode",
                checked: darkMode,
                onCheckedChange: (checked)=>setSettings({
                        darkMode: checked
                    })
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/SettingsModal/SettingsModal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, undefined);
};
_s(SettingsModal, "TMIr+kJxyTuKsoF4i4sOaZue46s=", false, function() {
    return [
        _hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__.useSettingsStore,
        _hooks_useUIConfig__WEBPACK_IMPORTED_MODULE_5__.useUIConfig,
        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation
    ];
});
_c = SettingsModal;
var _c;
$RefreshReg$(_c, "SettingsModal");

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
"./src/hooks/useDetailsTabs.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  availableJobTabs: () => (availableJobTabs),
  useDetailsTabs: () => (useDetailsTabs)
});
/* ESM import */var _bull_board_api_constants_statuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../api/dist/constants/statuses.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _useSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/hooks/useSettings.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _s = $RefreshSig$();



const availableJobTabs = [
    'Data',
    'Options',
    'Logs',
    'Error'
];
function useDetailsTabs(currentStatus) {
    _s();
    const [tabs, updateTabs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { defaultJobTab } = (0,_useSettings__WEBPACK_IMPORTED_MODULE_2__.useSettingsStore)();
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs.find((tab)=>tab === defaultJobTab) || tabs[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let nextTabs = availableJobTabs.filter((tab)=>tab !== 'Error');
        if (currentStatus === _bull_board_api_constants_statuses__WEBPACK_IMPORTED_MODULE_0__.STATUSES.failed) {
            nextTabs = [
                'Error',
                ...nextTabs
            ];
        } else {
            nextTabs = [
                ...nextTabs,
                'Error'
            ];
        }
        updateTabs(nextTabs);
    }, [
        currentStatus
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedTab(tabs.includes(defaultJobTab) ? defaultJobTab : tabs[0]);
    }, [
        defaultJobTab,
        tabs
    ]);
    return {
        tabs: tabs === null || tabs === void 0 ? void 0 : tabs.map((title)=>({
                title,
                isActive: title === selectedTab,
                selectTab: ()=>setSelectedTab(title)
            })),
        selectedTab
    };
}
_s(useDetailsTabs, "PSt9OLv2XqTz4axyV5TckW8+VhA=", false, function() {
    return [
        _useSettings__WEBPACK_IMPORTED_MODULE_2__.useSettingsStore
    ];
});

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
"../../node_modules/@radix-ui/react-switch/dist/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Root: () => (Root),
  Switch: () => (Switch),
  SwitchThumb: () => (SwitchThumb),
  Thumb: () => (Thumb),
  createSwitchScope: () => (createSwitchScope)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs");
/* ESM import */var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* ESM import */var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs");
/* ESM import */var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* ESM import */var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/@radix-ui/react-use-previous/dist/index.mjs");
/* ESM import */var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/@radix-ui/react-use-size/dist/index.mjs");
/* ESM import */var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");
"use client";

// src/switch.tsx









var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.useControllableState)({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(ref, forwardedRef);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.usePrevious)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.useSize)(control);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch;
var Thumb = SwitchThumb;

//# sourceMappingURL=index.mjs.map


}),
"../../node_modules/@radix-ui/react-use-previous/dist/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  usePrevious: () => (usePrevious)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
// packages/react/use-previous/src/use-previous.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


}),

}]);
//# sourceMappingURL=src_components_SettingsModal_SettingsModal_tsx.js.map
"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_components_RedisStatsModal_RedisStatsModal_tsx"], {
"./src/components/RedisStatsModal/RedisStatsModal.module.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"redisStats":"src-components-RedisStatsModal-RedisStatsModal-module__redisStats-bLzaEu"});
    if(true) {
      (function() {
        var localsJsonString = "{\"redisStats\":\"src-components-RedisStatsModal-RedisStatsModal-module__redisStats-bLzaEu\"}";
        // 1756647378721
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
"./src/components/RedisStatsModal/RedisStatsModal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RedisStatsModal: () => (RedisStatsModal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/date-fns/esm/formatDistance/index.js");
/* ESM import */var pretty_bytes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/pretty-bytes/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hooks/useApi.ts");
/* ESM import */var _hooks_useInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/useInterval.ts");
/* ESM import */var _services_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/services/i18n.ts");
/* ESM import */var _Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Modal/Modal.tsx");
/* ESM import */var _RedisStatsModal_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/RedisStatsModal/RedisStatsModal.module.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();









const getMemoryUsage = (used, total)=>{
    if (used === undefined) {
        return '-';
    }
    if (total === undefined) {
        return (0,pretty_bytes__WEBPACK_IMPORTED_MODULE_8__["default"])(used);
    }
    return `${(used / total * 100).toFixed(2)}%`;
};
const RedisStatsModal = (param)=>{
    let { open, onClose } = param;
    _s();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const api = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__.useApi)();
    (0,_hooks_useInterval__WEBPACK_IMPORTED_MODULE_4__.useInterval)(()=>api.getStats().then((stats)=>setStats(stats)), 5000);
    if (!stats) {
        return null;
    }
    const items = [
        {
            title: t('REDIS.MEMORY_USAGE'),
            value: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    stats.memory.total && stats.memory.used ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                        children: [
                            (0,pretty_bytes__WEBPACK_IMPORTED_MODULE_8__["default"])(stats.memory.used),
                            " of ",
                            (0,pretty_bytes__WEBPACK_IMPORTED_MODULE_8__["default"])(stats.memory.total)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                        className: "error",
                        children: t('REDIS.ERROR.MEMORY_USAGE')
                    }, void 0, false, {
                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, undefined),
                    getMemoryUsage(stats.memory.used, stats.memory.total)
                ]
            }, void 0, true)
        },
        {
            title: t('REDIS.PEEK_MEMORY'),
            value: (0,pretty_bytes__WEBPACK_IMPORTED_MODULE_8__["default"])(stats.memory.peak)
        },
        {
            title: t('REDIS.FRAGMENTATION_RATIO'),
            value: stats.memory.fragmentationRatio
        },
        {
            title: t('REDIS.CONNECTED_CLIENTS'),
            value: stats.clients.connected
        },
        {
            title: t('REDIS.BLOCKED_CLIENTS'),
            value: stats.clients.blocked
        },
        {
            title: t('REDIS.VERSION'),
            value: stats.version
        },
        {
            title: t('REDIS.MODE'),
            value: stats.mode
        },
        {
            title: t('REDIS.OS'),
            value: stats.os
        },
        {
            title: t('REDIS.UP_TIME'),
            value: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(0, stats.uptime * 1000, {
                includeSeconds: true,
                locale: _services_i18n__WEBPACK_IMPORTED_MODULE_5__.dateFnsLocale
            })
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__.Modal, {
        width: "small",
        open: open,
        onClose: onClose,
        title: t('REDIS.TITLE'),
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: _RedisStatsModal_module_css__WEBPACK_IMPORTED_MODULE_7__["default"].redisStats,
            children: items.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: item.value
                        }, void 0, false, {
                            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, i, true, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, undefined))
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/RedisStatsModal/RedisStatsModal.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, undefined);
};
_s(RedisStatsModal, "FB7j/vveSQSO8F9AofrFZEzIsyw=", false, function() {
    return [
        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation,
        _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__.useApi,
        _hooks_useInterval__WEBPACK_IMPORTED_MODULE_4__.useInterval
    ];
});
_c = RedisStatsModal;
var _c;
$RefreshReg$(_c, "RedisStatsModal");

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
"../../node_modules/pretty-bytes/index.js": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (prettyBytes)
});
const BYTE_UNITS = [
	'B',
	'kB',
	'MB',
	'GB',
	'TB',
	'PB',
	'EB',
	'ZB',
	'YB',
];

const BIBYTE_UNITS = [
	'B',
	'KiB',
	'MiB',
	'GiB',
	'TiB',
	'PiB',
	'EiB',
	'ZiB',
	'YiB',
];

const BIT_UNITS = [
	'b',
	'kbit',
	'Mbit',
	'Gbit',
	'Tbit',
	'Pbit',
	'Ebit',
	'Zbit',
	'Ybit',
];

const BIBIT_UNITS = [
	'b',
	'kibit',
	'Mibit',
	'Gibit',
	'Tibit',
	'Pibit',
	'Eibit',
	'Zibit',
	'Yibit',
];

/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/
const toLocaleString = (number, locale, options) => {
	let result = number;
	if (typeof locale === 'string' || Array.isArray(locale)) {
		result = number.toLocaleString(locale, options);
	} else if (locale === true || options !== undefined) {
		result = number.toLocaleString(undefined, options);
	}

	return result;
};

const log10 = numberOrBigInt => {
	if (typeof numberOrBigInt === 'number') {
		return Math.log10(numberOrBigInt);
	}

	const string = numberOrBigInt.toString(10);

	return string.length + Math.log10('0.' + string.slice(0, 15));
};

const log = numberOrBigInt => {
	if (typeof numberOrBigInt === 'number') {
		return Math.log(numberOrBigInt);
	}

	return log10(numberOrBigInt) * Math.log(10);
};

const divide = (numberOrBigInt, divisor) => {
	if (typeof numberOrBigInt === 'number') {
		return numberOrBigInt / divisor;
	}

	const integerPart = numberOrBigInt / BigInt(divisor);
	const remainder = numberOrBigInt % BigInt(divisor);
	return Number(integerPart) + (Number(remainder) / divisor);
};

function prettyBytes(number, options) {
	if (typeof number !== 'bigint' && !Number.isFinite(number)) {
		throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
	}

	options = {
		bits: false,
		binary: false,
		space: true,
		...options,
	};

	const UNITS = options.bits
		? (options.binary ? BIBIT_UNITS : BIT_UNITS)
		: (options.binary ? BIBYTE_UNITS : BYTE_UNITS);

	const separator = options.space ? ' ' : '';

	if (options.signed && (typeof number === 'number' ? number === 0 : number === 0n)) {
		return ` 0${separator}${UNITS[0]}`;
	}

	const isNegative = number < 0;
	const prefix = isNegative ? '-' : (options.signed ? '+' : '');

	if (isNegative) {
		number = -number;
	}

	let localeOptions;

	if (options.minimumFractionDigits !== undefined) {
		localeOptions = {minimumFractionDigits: options.minimumFractionDigits};
	}

	if (options.maximumFractionDigits !== undefined) {
		localeOptions = {maximumFractionDigits: options.maximumFractionDigits, ...localeOptions};
	}

	if (number < 1) {
		const numberString = toLocaleString(number, options.locale, localeOptions);
		return prefix + numberString + separator + UNITS[0];
	}

	const exponent = Math.min(Math.floor(options.binary ? log(number) / Math.log(1024) : log10(number) / 3), UNITS.length - 1);
	number = divide(number, (options.binary ? 1024 : 1000) ** exponent);

	if (!localeOptions) {
		number = number.toPrecision(3);
	}

	const numberString = toLocaleString(Number(number), options.locale, localeOptions);

	const unit = UNITS[exponent];

	return prefix + numberString + separator + unit;
}


}),

}]);
//# sourceMappingURL=src_components_RedisStatsModal_RedisStatsModal_tsx.js.map
"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_pages_JobPage_JobPage_tsx"], {
"./src/pages/JobPage/JobPage.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JobPage: () => (JobPage)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/clsx/dist/clsx.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/react-router/esm/react-router.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/react-router-dom/esm/react-router-dom.js");
/* ESM import */var _components_Icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Icons/ArrowLeft.tsx");
/* ESM import */var _components_JobCard_JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/JobCard/JobCard.tsx");
/* ESM import */var _components_StickyHeader_StickyHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/StickyHeader/StickyHeader.tsx");
/* ESM import */var _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/hooks/useActiveQueue.ts");
/* ESM import */var _hooks_useJob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/hooks/useJob.ts");
/* ESM import */var _hooks_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/hooks/useModal.ts");
/* ESM import */var _hooks_useSelectedStatuses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/hooks/useSelectedStatuses.ts");
/* ESM import */var _utils_links__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/utils/links.ts");
/* ESM import */var _components_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/Button/Button.module.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();













const AddJobModalLazy = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("vendors-node_modules_codemirror_commands_dist_index_js-node_modules_codemirror-json-schema_di-527ed0"), __webpack_require__.e("src_components_Form_JsonField_JsonField_tsx-src_components_Modal_Modal_tsx"), __webpack_require__.e("src_components_AddJobModal_AddJobModal_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/components/AddJobModal/AddJobModal.tsx")).then((param)=>{
        let { AddJobModal } = param;
        return {
            default: AddJobModal
        };
    }));
_c = AddJobModalLazy;
const UpdateJobDataModalLazy = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("vendors-node_modules_codemirror_commands_dist_index_js-node_modules_codemirror-json-schema_di-527ed0"), __webpack_require__.e("src_components_Form_JsonField_JsonField_tsx-src_components_Modal_Modal_tsx"), __webpack_require__.e("src_components_UpdateJobDataModal_UpdateJobDataModal_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/components/UpdateJobDataModal/UpdateJobDataModal.tsx")).then((param)=>{
        let { UpdateJobDataModal } = param;
        return {
            default: UpdateJobDataModal
        };
    }));
_c1 = UpdateJobDataModalLazy;
const JobPage = ()=>{
    _s();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();
    const queue = (0,_hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_7__.useActiveQueue)();
    const { job, status, actions } = (0,_hooks_useJob__WEBPACK_IMPORTED_MODULE_8__.useJob)();
    const selectedStatuses = (0,_hooks_useSelectedStatuses__WEBPACK_IMPORTED_MODULE_10__.useSelectedStatuses)();
    const modal = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__.useModal)();
    actions.pollJob();
    if (!queue) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            children: t('QUEUE.NOT_FOUND')
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
            lineNumber: 42,
            columnNumber: 12
        }, undefined);
    }
    if (!job) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            children: t('JOB.NOT_FOUND')
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
            lineNumber: 46,
            columnNumber: 12
        }, undefined);
    }
    const cleanJob = async ()=>{
        await actions.cleanJob(queue.name)(job)();
        history.replace(_utils_links__WEBPACK_IMPORTED_MODULE_11__.links.queuePage(queue.name, selectedStatuses));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StickyHeader_StickyHeader__WEBPACK_IMPORTED_MODULE_6__.StickyHeader, {
                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_12__["default"].button, _components_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_12__["default"]["default"]),
                            to: _utils_links__WEBPACK_IMPORTED_MODULE_11__.links.queuePage(queue.name, selectedStatuses),
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_4__.ArrowLeftIcon, {}, void 0, false, {
                                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                " ",
                                t('JOB.STATUS', {
                                    status: status.toLocaleUpperCase()
                                })
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard_JobCard__WEBPACK_IMPORTED_MODULE_5__.JobCard, {
                job: job,
                status: status,
                actions: {
                    cleanJob,
                    promoteJob: actions.promoteJob(queue.name)(job),
                    retryJob: actions.retryJob(queue.name, status)(job),
                    getJobLogs: actions.getJobLogs(queue.name)(job),
                    updateJobData: ()=>modal.open('updateJobData'),
                    duplicateJob: ()=>modal.open('addJob')
                },
                readOnlyMode: queue.readOnlyMode,
                allowRetries: (job.isFailed || queue.allowCompletedRetries) && queue.allowRetries
            }, job.id, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                fallback: null,
                children: [
                    modal.isMounted('addJob') && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddJobModalLazy, {
                        open: modal.isOpen('addJob'),
                        onClose: modal.close('addJob'),
                        job: job
                    }, void 0, false, {
                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, undefined),
                    modal.isMounted('updateJobData') && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UpdateJobDataModalLazy, {
                        open: modal.isOpen('updateJobData'),
                        onClose: modal.close('updateJobData'),
                        job: job
                    }, void 0, false, {
                        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/pages/JobPage/JobPage.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, undefined);
};
_s(JobPage, "L8Q1Ruvr+1zOzIslMTvNvBJ3MdI=", false, function() {
    return [
        react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation,
        react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory,
        _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_7__.useActiveQueue,
        _hooks_useJob__WEBPACK_IMPORTED_MODULE_8__.useJob,
        _hooks_useSelectedStatuses__WEBPACK_IMPORTED_MODULE_10__.useSelectedStatuses,
        _hooks_useModal__WEBPACK_IMPORTED_MODULE_9__.useModal
    ];
});
_c2 = JobPage;
var _c, _c1, _c2;
$RefreshReg$(_c, "AddJobModalLazy");
$RefreshReg$(_c1, "UpdateJobDataModalLazy");
$RefreshReg$(_c2, "JobPage");

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
//# sourceMappingURL=src_pages_JobPage_JobPage_tsx.js.map
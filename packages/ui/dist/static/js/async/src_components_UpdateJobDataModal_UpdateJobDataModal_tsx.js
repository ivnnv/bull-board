"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_components_UpdateJobDataModal_UpdateJobDataModal_tsx"], {
"./src/components/UpdateJobDataModal/UpdateJobDataModal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateJobDataModal: () => (UpdateJobDataModal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hooks/useActiveQueue.ts");
/* ESM import */var _hooks_useJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/useJob.ts");
/* ESM import */var _hooks_useQueues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/hooks/useQueues.ts");
/* ESM import */var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Button/Button.tsx");
/* ESM import */var _Form_JsonField_JsonField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Form/JsonField/JsonField.tsx");
/* ESM import */var _Modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Modal/Modal.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();








const UpdateJobDataModal = (param)=>{
    let { open, onClose, job } = param;
    _s();
    const { queues } = (0,_hooks_useQueues__WEBPACK_IMPORTED_MODULE_5__.useQueues)();
    const { actions: jobActions } = (0,_hooks_useJob__WEBPACK_IMPORTED_MODULE_4__.useJob)();
    const activeQueue = (0,_hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__.useActiveQueue)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    if (!queues || !activeQueue) {
        return null;
    }
    const updateJobData = async (evt)=>{
        evt.preventDefault();
        const form = evt.target;
        const formData = Object.fromEntries(Array.from(form.elements).filter((input)=>input.name).map((input)=>[
                input.name,
                input.value
            ]));
        try {
            formData.jobData = JSON.parse(formData.jobData);
            await jobActions.updateJobData(activeQueue.name, job, formData)();
            onClose();
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__.Modal, {
        width: "small",
        open: open,
        onClose: onClose,
        title: t('UPDATE_JOB_DATA.TITLE'),
        actionButton: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
            type: "submit",
            theme: "primary",
            form: "edit-job-data-form",
            children: t('UPDATE_JOB_DATA.UPDATE')
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/UpdateJobDataModal/UpdateJobDataModal.tsx",
            lineNumber: 55,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            id: "edit-job-data-form",
            onSubmit: updateJobData,
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_JsonField_JsonField__WEBPACK_IMPORTED_MODULE_7__.JsonField, {
                label: t('UPDATE_JOB_DATA.JOB_DATA'),
                value: (job === null || job === void 0 ? void 0 : job.data) || {},
                id: "job-data",
                name: "jobData"
            }, void 0, false, {
                fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/UpdateJobDataModal/UpdateJobDataModal.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/UpdateJobDataModal/UpdateJobDataModal.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/UpdateJobDataModal/UpdateJobDataModal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, undefined);
};
_s(UpdateJobDataModal, "TJPKD3Nwvbo8uVCpt9EMJQrdGw8=", false, function() {
    return [
        _hooks_useQueues__WEBPACK_IMPORTED_MODULE_5__.useQueues,
        _hooks_useJob__WEBPACK_IMPORTED_MODULE_4__.useJob,
        _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__.useActiveQueue,
        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation
    ];
});
_c = UpdateJobDataModal;
var _c;
$RefreshReg$(_c, "UpdateJobDataModal");

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
//# sourceMappingURL=src_components_UpdateJobDataModal_UpdateJobDataModal_tsx.js.map
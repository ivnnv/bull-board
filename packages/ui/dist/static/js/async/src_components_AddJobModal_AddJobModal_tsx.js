"use strict";
(self["webpackChunk_bull_board_ui"] = self["webpackChunk_bull_board_ui"] || []).push([["src_components_AddJobModal_AddJobModal_tsx"], {
"./src/components/AddJobModal/AddJobModal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddJobModal: () => (AddJobModal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* ESM import */var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react-i18next/dist/es/index.js");
/* ESM import */var _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hooks/useActiveQueue.ts");
/* ESM import */var _hooks_useQueues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/useQueues.ts");
/* ESM import */var _schemas_bull_jobOptions_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/schemas/bull/jobOptions.json");
/* ESM import */var _schemas_bullmq_jobOptions_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/schemas/bullmq/jobOptions.json");
/* ESM import */var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Button/Button.tsx");
/* ESM import */var _Form_InputField_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Form/InputField/InputField.tsx");
/* ESM import */var _Form_JsonField_JsonField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Form/JsonField/JsonField.tsx");
/* ESM import */var _Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Form/SelectField/SelectField.tsx");
/* ESM import */var _Modal_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Modal/Modal.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();











const jobOptionsSchema = {
    bull: _schemas_bull_jobOptions_json__WEBPACK_IMPORTED_MODULE_5__,
    bullmq: _schemas_bullmq_jobOptions_json__WEBPACK_IMPORTED_MODULE_6__
};
const AddJobModal = (param)=>{
    let { open, onClose, job } = param;
    _s();
    const { queues, actions } = (0,_hooks_useQueues__WEBPACK_IMPORTED_MODULE_4__.useQueues)();
    const activeQueue = (0,_hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__.useActiveQueue)();
    const [selectedQueue, setSelectedQueue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeQueue);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    if (!queues || !activeQueue || !selectedQueue) {
        return null;
    }
    const addJob = async (evt)=>{
        evt.preventDefault();
        const form = evt.target;
        const formData = Object.fromEntries(Array.from(form.elements).filter((input)=>input.name).map((input)=>[
                input.name,
                input.value
            ]));
        formData.jobData = JSON.parse(formData.jobData);
        formData.jobOptions = JSON.parse(formData.jobOptions);
        await actions.addJob(formData.queueName, formData.jobName || '__default__', formData.jobData, formData.jobOptions)();
        onClose();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_11__.Modal, {
        width: "small",
        open: open,
        onClose: onClose,
        title: t('ADD_JOB.TITLE', {
            context: job ? 'duplicate' : undefined
        }),
        actionButton: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {
            type: "submit",
            theme: "primary",
            form: "add-job-form",
            children: t(`ADD_JOB.${job ? 'DUPLICATE' : 'ADD'}`)
        }, void 0, false, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            id: "add-job-form",
            onSubmit: addJob,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_10__.SelectField, {
                    label: t('ADD_JOB.QUEUE_NAME'),
                    id: "queue-name",
                    options: (queues || []).map((queue)=>({
                            text: queue.name,
                            value: queue.name
                        })),
                    name: "queueName",
                    value: selectedQueue.name || '',
                    onChange: (event)=>setSelectedQueue(queues.find((q)=>q.name === event.target.value))
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_InputField_InputField__WEBPACK_IMPORTED_MODULE_8__.InputField, {
                    label: t('ADD_JOB.JOB_NAME'),
                    id: "job-name",
                    name: "jobName",
                    defaultValue: job === null || job === void 0 ? void 0 : job.name,
                    placeholder: "__default__"
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_JsonField_JsonField__WEBPACK_IMPORTED_MODULE_9__.JsonField, {
                    label: t('ADD_JOB.JOB_DATA'),
                    id: "job-data",
                    name: "jobData",
                    value: job === null || job === void 0 ? void 0 : job.data
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_JsonField_JsonField__WEBPACK_IMPORTED_MODULE_9__.JsonField, {
                    label: t('ADD_JOB.JOB_OPTIONS'),
                    id: "job-options",
                    name: "jobOptions",
                    schema: jobOptionsSchema[selectedQueue.type],
                    value: job === null || job === void 0 ? void 0 : job.opts
                }, void 0, false, {
                    fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/ivnnv/Sites/ivnnv/bull-board/packages/ui/src/components/AddJobModal/AddJobModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, undefined);
};
_s(AddJobModal, "6FiTJRR1rgFPP/SE+g0mxBmgN8M=", false, function() {
    return [
        _hooks_useQueues__WEBPACK_IMPORTED_MODULE_4__.useQueues,
        _hooks_useActiveQueue__WEBPACK_IMPORTED_MODULE_3__.useActiveQueue,
        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation
    ];
});
_c = AddJobModal;
var _c;
$RefreshReg$(_c, "AddJobModal");

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
"./src/schemas/bull/jobOptions.json": (function (module) {
module.exports = JSON.parse('{"$ref":"#/definitions/Bull.JobOptions","$schema":"http://json-schema.org/draft-07/schema#","definitions":{"Bull.BackoffOptions":{"additionalProperties":false,"properties":{"delay":{"description":"Backoff delay, in milliseconds","type":"number"},"options":{"description":"Options for custom strategies"},"type":{"description":"Backoff type, which can be either `fixed` or `exponential`","type":"string"}},"required":["type"],"type":"object"},"Bull.JobId":{"type":["number","string"]},"Bull.JobOptions":{"additionalProperties":false,"properties":{"attempts":{"description":"The total number of attempts to try the job until it completes","type":"number"},"backoff":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/Bull.BackoffOptions"}],"description":"Backoff setting for automatic retries if the job fails"},"delay":{"description":"An amount of miliseconds to wait until this job can be processed. Note that for accurate delays, both server and clients should have their clocks synchronized. [optional]","type":"number"},"jobId":{"$ref":"#/definitions/Bull.JobId","description":"Override the job ID - by default, the job ID is a unique integer, but you can use this setting to override it. If you use this option, it is up to you to ensure the jobId is unique. If you attempt to add a job with an id that already exists, it will not be added."},"lifo":{"description":"A boolean which, if true, adds the job to the right of the queue instead of the left (default false)","type":"boolean"},"preventParsingData":{"description":"Prevents JSON data from being parsed.","type":"boolean"},"priority":{"description":"Optional priority value. ranges from 1 (highest priority) to MAX_INT  (lowest priority). Note that using priorities has a slight impact on performance, so do not use it if not required","type":"number"},"removeOnComplete":{"anyOf":[{"type":"boolean"},{"type":"number"},{"$ref":"#/definitions/Bull.KeepJobsOptions"}],"description":"A boolean which, if true, removes the job when it successfully completes. When a number, it specifies the amount of jobs to keep. Default behavior is to keep the job in the completed set. See KeepJobsOptions if using that interface instead."},"removeOnFail":{"anyOf":[{"type":"boolean"},{"type":"number"},{"$ref":"#/definitions/Bull.KeepJobsOptions"}],"description":"A boolean which, if true, removes the job when it fails after all attempts. When a number, it specifies the amount of jobs to keep. Default behavior is to keep the job in the failed set. See KeepJobsOptions if using that interface instead."},"repeat":{"anyOf":[{"additionalProperties":false,"properties":{"count":{"description":"The start value for the repeat iteration count.","type":"number"},"cron":{"description":"Cron pattern specifying when the job should execute","type":"string"},"endDate":{"anyOf":[{"format":"date-time","type":"string"},{"type":"string"},{"type":"number"}],"description":"End date when the repeat job should stop repeating"},"key":{"description":"The key for the repeatable job metadata in Redis.","type":"string"},"limit":{"description":"Number of times the job should repeat at max.","type":"number"},"startDate":{"anyOf":[{"format":"date-time","type":"string"},{"type":"string"},{"type":"number"}],"description":"Start date when the repeat job should start repeating (only with cron)."},"tz":{"description":"Timezone","type":"string"}},"required":["cron"],"type":"object"},{"additionalProperties":false,"properties":{"count":{"description":"The start value for the repeat iteration count.","type":"number"},"endDate":{"anyOf":[{"format":"date-time","type":"string"},{"type":"string"},{"type":"number"}],"description":"End date when the repeat job should stop repeating"},"every":{"description":"Repeat every millis (cron setting cannot be used together with this setting.)","type":"number"},"key":{"description":"The key for the repeatable job metadata in Redis.","type":"string"},"limit":{"description":"Number of times the job should repeat at max.","type":"number"},"tz":{"description":"Timezone","type":"string"}},"required":["every"],"type":"object"}],"description":"Repeat job according to a cron specification"},"stackTraceLimit":{"description":"Limits the amount of stack trace lines that will be recorded in the stacktrace.","type":"number"},"timeout":{"description":"The number of milliseconds after which the job should be fail with a timeout error","type":"number"}},"type":"object"},"Bull.KeepJobsOptions":{"additionalProperties":false,"description":"Specify which jobs to keep after finishing processing this job. If both age and count are specified, then the jobs kept will be the ones that satisfies both properties.","properties":{"age":{"description":"Maximum age in *seconds* for job to be kept.","type":"number"},"count":{"description":"Maximum count of jobs to be kept.","type":"number"}},"type":"object"}}}')

}),
"./src/schemas/bullmq/jobOptions.json": (function (module) {
module.exports = JSON.parse('{"$ref":"#/definitions/JobsOptions","$schema":"http://json-schema.org/draft-07/schema#","definitions":{"BackoffOptions":{"additionalProperties":false,"description":"Settings for backing off failed jobs.","properties":{"delay":{"description":"Delay in milliseconds.","type":"number"},"type":{"anyOf":[{"type":"string"},{"enum":["fixed","exponential"],"type":"string"}],"description":"Name of the backoff strategy."}},"required":["type"],"type":"object"},"DateType":{"anyOf":[{"format":"date-time","type":"string"},{"type":"number"},{"type":"string"}]},"JobsOptions":{"additionalProperties":false,"properties":{"attempts":{"description":"The total number of attempts to try the job until it completes.","type":"number"},"backoff":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/BackoffOptions"}],"description":"Backoff setting for automatic retries if the job fails"},"delay":{"description":"An amount of milliseconds to wait until this job can be processed. Note that for accurate delays, worker and producers should have their clocks synchronized.","type":"number"},"failParentOnFailure":{"description":"If true, moves parent to failed.","type":"boolean"},"jobId":{"description":"Override the job ID - by default, the job ID is a unique integer, but you can use this setting to override it. If you use this option, it is up to you to ensure the jobId is unique. If you attempt to add a job with an id that already exists, it will not be added.","type":"string"},"keepLogs":{"description":"Maximum amount of log entries that will be preserved","type":"number"},"lifo":{"description":"If true, adds the job to the right of the queue instead of the left (default false)","type":"boolean"},"parent":{"additionalProperties":false,"properties":{"id":{"type":"string"},"queue":{"description":"It includes the prefix, the namespace separator :, and queue name.","type":"string"}},"required":["id","queue"],"type":"object"},"prevMillis":{"description":"Internal property used by repeatable jobs.","type":"number"},"priority":{"description":"Ranges from 1 (highest priority) to 2 097 152 (lowest priority). Note that using priorities has a slight impact on performance, so do not use it if not required.","type":"number"},"removeDependencyOnFailure":{"description":"If true, removes the job from its parent dependencies when it fails after all attempts.","type":"boolean"},"removeOnComplete":{"anyOf":[{"type":"boolean"},{"type":"number"},{"$ref":"#/definitions/KeepJobs"}],"description":"If true, removes the job when it successfully completes When given a number, it specifies the maximum amount of jobs to keep, or you can provide an object specifying max age and/or count to keep. It overrides whatever setting is used in the worker. Default behavior is to keep the job in the completed set."},"removeOnFail":{"anyOf":[{"type":"boolean"},{"type":"number"},{"$ref":"#/definitions/KeepJobs"}],"description":"If true, removes the job when it fails after all attempts. When given a number, it specifies the maximum amount of jobs to keep, or you can provide an object specifying max age and/or count to keep. It overrides whatever setting is used in the worker. Default behavior is to keep the job in the failed set."},"repeat":{"$ref":"#/definitions/RepeatOptions","description":"Repeat this job, for example based on a `cron` schedule."},"repeatJobKey":{"description":"Internal property used by repeatable jobs to save base repeat job key.","type":"string"},"sizeLimit":{"description":"Limits the size in bytes of the job\'s data payload (as a JSON serialized string).","type":"number"},"stackTraceLimit":{"description":"Limits the amount of stack trace lines that will be recorded in the stacktrace.","type":"number"},"timestamp":{"description":"Timestamp when the job was created.","type":"number"}},"type":"object"},"KeepJobs":{"additionalProperties":false,"description":"KeepJobs\\n\\nSpecify which jobs to keep after finishing. If both age and count are specified, then the jobs kept will be the ones that satisfies both properties.","properties":{"age":{"description":"Maximum age in seconds for job to be kept.","type":"number"},"count":{"description":"Maximum count of jobs to be kept.","type":"number"}},"type":"object"},"RepeatOptions":{"additionalProperties":false,"description":"Settings for repeatable jobs","properties":{"count":{"description":"The start value for the repeat iteration count.","type":"number"},"currentDate":{"$ref":"#/definitions/DateType"},"endDate":{"$ref":"#/definitions/DateType"},"every":{"description":"Repeat after this amount of milliseconds (`pattern` setting cannot be used together with this setting.)","type":"number"},"immediately":{"description":"Repeated job should start right now ( work only with every settings)","type":"boolean"},"jobId":{"type":"string"},"limit":{"description":"Number of times the job should repeat at max.","type":"number"},"nthDayOfWeek":{"type":"number"},"offset":{"type":"number"},"pattern":{"description":"A repeat pattern","type":"string"},"prevMillis":{"type":"number"},"startDate":{"$ref":"#/definitions/DateType"},"tz":{"type":"string"},"utc":{"type":"boolean"}},"type":"object"}}}')

}),

}]);
//# sourceMappingURL=src_components_AddJobModal_AddJobModal_tsx.js.map
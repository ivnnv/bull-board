"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentType = void 0;
const getContentType = (filename) => {
    let contentType = "text/html";
    if (!filename)
        return contentType;
    switch (filename.split(".").pop()) {
        case "js":
            contentType = "text/javascript";
            break;
        case "css":
            contentType = "text/css";
            break;
        case "png":
            contentType = "image/png";
            break;
        case "svg":
            contentType = "image/svg+xml";
            break;
        case "json":
            contentType = "application/json";
            break;
        case "ico":
            contentType = "image/x-icon";
            break;
    }
    return contentType;
};
exports.getContentType = getContentType;
//# sourceMappingURL=getContentType.js.map
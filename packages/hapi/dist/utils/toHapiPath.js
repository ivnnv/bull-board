"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHapiPath = toHapiPath;
function toHapiPath(path) {
    return path
        .split('/')
        .map((path) => (path.startsWith(':') ? `{${path.substring(1)}}` : path))
        .join('/');
}
//# sourceMappingURL=toHapiPath.js.map
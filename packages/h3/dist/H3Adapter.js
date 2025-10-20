"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H3Adapter = void 0;
const ejs_1 = __importDefault(require("ejs"));
const fs_1 = require("fs");
const h3_1 = require("h3");
const node_path_1 = require("node:path");
const getContentType_1 = require("./utils/getContentType");
class H3Adapter {
    constructor() {
        this.uiHandler = (0, h3_1.createRouter)();
        this.basePath = '';
        this.uiConfig = {};
    }
    setBasePath(path) {
        this.basePath = path;
        return this;
    }
    setStaticPath(staticsRoute, staticsPath) {
        this.statics = { route: staticsRoute, path: staticsPath };
        return this;
    }
    setViewsPath(viewPath) {
        this.viewPath = viewPath;
        return this;
    }
    setErrorHandler(handler) {
        this.errorHandler = handler;
        return this;
    }
    setApiRoutes(routes) {
        routes.forEach(({ route, handler, method: methodOrMethods }) => {
            const methods = Array.isArray(methodOrMethods) ? methodOrMethods : [methodOrMethods];
            methods.forEach((method) => {
                this.registerRoute(route, method, handler);
            });
        });
        return this;
    }
    setEntryRoute(routeDef) {
        this.entryRoute = routeDef;
        return this;
    }
    setQueues(bullBoardQueues) {
        this.bullBoardQueues = bullBoardQueues;
        return this;
    }
    setUIConfig(config = {}) {
        this.uiConfig = config;
        return this;
    }
    registerHandlers() {
        if (!this.statics) {
            throw new Error(`Please call 'setStaticPath' before using 'registerHandlers'`);
        }
        else if (!this.entryRoute) {
            throw new Error(`Please call 'setEntryRoute' before using 'registerHandlers'`);
        }
        else if (!this.viewPath) {
            throw new Error(`Please call 'setViewsPath' before using 'registerHandlers'`);
        }
        else if (!this.errorHandler) {
            throw new Error(`Please call 'setErrorHandler' before using 'registerHandlers'`);
        }
        else if (!this.uiConfig) {
            throw new Error(`Please call 'setUIConfig' before using 'registerHandlers'`);
        }
        const getStaticPath = (relativePath) => {
            if (!this.statics)
                return '';
            const relativeRoot = `${this.basePath}${this.statics.route}/`;
            // Ensure that the path is relative to the statics route
            if (!relativePath.startsWith(relativeRoot))
                return '';
            // Normalize the path
            const normalizedPath = (0, node_path_1.normalize)(relativePath);
            const staticRelativePath = normalizedPath.replace(relativeRoot, '');
            // Resolve the absolute path
            const absolutePath = (0, node_path_1.resolve)(this.statics.path, staticRelativePath);
            // Check if the absolute path is still within the statics directory
            if (!absolutePath.startsWith((0, node_path_1.resolve)(this.statics.path)))
                return '';
            return absolutePath;
        };
        const { method, route, handler } = this.entryRoute;
        const routes = Array.isArray(route) ? route : [route];
        routes.forEach((route) => {
            this.uiHandler.use(`${this.basePath}${route}`, (0, h3_1.eventHandler)(async () => {
                const { name: filename, params } = handler({
                    basePath: this.basePath,
                    uiConfig: this.uiConfig,
                });
                return ejs_1.default.renderFile(`${this.viewPath}/${filename}`, params);
            }), method);
        });
        this.uiHandler.get(`${this.basePath}${this.statics.route}/**`, (0, h3_1.eventHandler)(async (event) => {
            return await (0, h3_1.serveStatic)(event, {
                fallthrough: false,
                getContents: (id) => (0, fs_1.readFileSync)(getStaticPath(id)),
                getMeta: (id) => {
                    try {
                        const fileStat = (0, fs_1.statSync)(getStaticPath(id));
                        return {
                            size: fileStat.size,
                            type: (0, getContentType_1.getContentType)(id),
                        };
                    }
                    catch (_e) {
                        return undefined;
                    }
                },
            });
        }));
        return this.uiHandler;
    }
    registerRoute(routeOrRoutes, method, handler) {
        const { bullBoardQueues } = this;
        if (!bullBoardQueues) {
            throw new Error(`Please call 'setQueues' before using 'registerHandlers'`);
        }
        const routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
        routes.forEach((route) => {
            this.uiHandler.use(`${this.basePath}${route}`, (0, h3_1.eventHandler)(async (event) => {
                try {
                    const { body } = await handler({
                        queues: this.bullBoardQueues,
                        params: (0, h3_1.getRouterParams)(event, { decode: true }),
                        query: (0, h3_1.getQuery)(event),
                        body: method !== 'get' ? await (0, h3_1.readBody)(event) : {},
                        headers: (0, h3_1.getHeaders)(event),
                    });
                    return body;
                }
                catch (e) {
                    if (this.errorHandler) {
                        const { body, status } = this.errorHandler(e);
                        return (0, h3_1.createError)({
                            statusCode: status,
                            data: body,
                        });
                    }
                }
            }), method);
        });
    }
}
exports.H3Adapter = H3Adapter;
//# sourceMappingURL=H3Adapter.js.map
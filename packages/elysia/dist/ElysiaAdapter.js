"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElysiaAdapter = void 0;
const node_fs_1 = require("node:fs");
const ejs_1 = __importDefault(require("ejs"));
const elysia_1 = require("elysia");
const mimeV4_1 = __importDefault(require("mimeV4"));
const node_path_1 = require("node:path");
class ElysiaAdapter {
    constructor(basePath = '') {
        this.plugin = new elysia_1.Elysia({
            name: '@bull-board/elysia',
        });
        this.basePath = '';
        this.uiConfig = {};
        if (basePath.length) {
            // it shows prefix is "" in types
            this.basePath = basePath;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.plugin.config.prefix = this.basePath;
        }
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
        this.plugin.onError(({ error, set }) => {
            const response = handler(error);
            set.status = response.status || 500;
            return response.body;
        });
        return this;
    }
    setApiRoutes(routes) {
        for (const { route, handler, method } of routes) {
            const methods = Array.isArray(method) ? method : [method];
            for (const method of methods) {
                this.registerRoute(route, method, handler);
            }
        }
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
    async registerPlugin() {
        if (!this.statics) {
            throw new Error(`Please call 'setStaticPath' before using 'registerHandlers'`);
        }
        if (!this.entryRoute) {
            throw new Error(`Please call 'setEntryRoute' before using 'registerHandlers'`);
        }
        if (!this.viewPath) {
            throw new Error(`Please call 'setViewsPath' before using 'registerHandlers'`);
        }
        if (!this.uiConfig) {
            throw new Error(`Please call 'setUIConfig' before using 'registerHandlers'`);
        }
        const { method, route, handler } = this.entryRoute;
        const routes = Array.isArray(route) ? route : [route];
        for (const route of routes) {
            this.plugin.route(method.toUpperCase(), route, async () => {
                const { name: filename, params } = handler({
                    basePath: this.basePath,
                    uiConfig: this.uiConfig,
                });
                return new Response(await ejs_1.default.renderFile(`${this.viewPath}/${filename}`, params), {
                    headers: {
                        'content-type': 'text/html',
                    },
                });
            });
        }
        const staticsPath = (0, node_path_1.resolve)(this.statics.path);
        const paths = await new Promise((resolve, reject) => {
            (0, node_fs_1.glob)(`${staticsPath}/**/*`, (err, files) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(files);
                }
            });
        });
        for (const path of paths) {
            const relativePath = path.substring(path.indexOf('dist') + 4).replaceAll('\\', '/');
            this.plugin.get(relativePath, async () => {
                var _a;
                const nodeStream = (0, node_fs_1.createReadStream)(path);
                const stream = new ReadableStream({
                    start(controller) {
                        nodeStream.on('data', (chunk) => controller.enqueue(chunk));
                        nodeStream.on('end', () => controller.close());
                        nodeStream.on('error', (err) => controller.error(err));
                    },
                    cancel() {
                        nodeStream.destroy();
                    },
                });
                return new Response(stream, {
                    headers: {
                        'content-type': (_a = mimeV4_1.default.getType((0, node_path_1.extname)(path))) !== null && _a !== void 0 ? _a : 'text/plain',
                    },
                });
            });
        }
        return this.plugin.as('scoped');
    }
    registerRoute(routeOrRoutes, method, handler) {
        const { bullBoardQueues } = this;
        if (!bullBoardQueues) {
            throw new Error(`Please call 'setQueues' before using 'registerHandlers'`);
        }
        const routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
        for (const route of routes) {
            this.plugin.route(method.toUpperCase(), route, async ({ params, body, query, headers, set }) => {
                const response = await handler({
                    queues: this.bullBoardQueues,
                    params: Object.fromEntries(Object.entries(params || {}).map(([key, value]) => [
                        key,
                        typeof value === 'string' ? decodeURIComponent(value) : value,
                    ])),
                    body: body,
                    query,
                    headers,
                });
                if (response.status)
                    set.status = response.status;
                return response.body;
            });
        }
    }
}
exports.ElysiaAdapter = ElysiaAdapter;
//# sourceMappingURL=ElysiaAdapter.js.map
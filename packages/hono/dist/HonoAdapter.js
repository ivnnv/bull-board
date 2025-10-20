"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonoAdapter = void 0;
const ejs_1 = __importDefault(require("ejs"));
const hono_1 = require("hono");
const node_path_1 = __importDefault(require("node:path"));
class HonoAdapter {
    constructor(serveStatic, 
    /**
     * only required for Cloudflare Workers. you should import it like this:
     *
     *   import manifest from '__STATIC_CONTENT_MANIFEST'
     *
     * ... and pass it as-is to the HonoAdapter constructor.
     */
    manifest = {}) {
        this.serveStatic = serveStatic;
        this.manifest = manifest;
        this.basePath = '/';
        this.apiRoutes = new hono_1.Hono();
    }
    setBasePath(path) {
        this.basePath = path;
        return this;
    }
    setStaticPath(staticRoute, staticPath) {
        this.staticRoute = staticRoute;
        this.staticPath = staticPath;
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
        const { errorHandler, bullBoardQueues } = this;
        if (!errorHandler || !bullBoardQueues) {
            throw new Error('');
        }
        routes.forEach(({ method: methodOrMethods, route, handler }) => {
            const methods = Array.isArray(methodOrMethods) ? methodOrMethods : [methodOrMethods];
            methods.forEach((m) => {
                this.registerRoute(route, m, handler);
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
    setUIConfig(config) {
        this.uiConfig = config;
        return this;
    }
    registerPlugin() {
        if (!this.staticRoute || !this.staticPath) {
            throw new Error(`Please call 'setStaticPath' before using 'registerPlugin'`);
        }
        else if (!this.entryRoute) {
            throw new Error(`Please call 'setEntryRoute' before using 'registerPlugin'`);
        }
        else if (!this.viewPath) {
            throw new Error(`Please call 'setViewsPath' before using 'registerPlugin'`);
        }
        else if (!this.uiConfig) {
            throw new Error(`Please call 'setUIConfig' before using 'registerPlugin'`);
        }
        const app = new hono_1.Hono();
        const staticBaseUrlPath = [this.basePath, this.staticRoute].join('/').replace(/\/{2,}/g, '/');
        app.get(`${this.staticRoute}/*`, this.serveStatic({
            root: node_path_1.default.relative(process.cwd(), this.staticPath),
            rewriteRequestPath: (p) => p.replace(staticBaseUrlPath, ''),
            manifest: this.manifest,
        }));
        app.route('/', this.apiRoutes);
        const routeOrRoutes = this.entryRoute.route;
        const routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
        routes.forEach((route) => {
            app[this.entryRoute.method](route, async (c) => {
                var _a;
                const { name: fileName, params } = this.entryRoute.handler({
                    basePath: this.basePath,
                    uiConfig: (_a = this.uiConfig) !== null && _a !== void 0 ? _a : {},
                });
                const template = await ejs_1.default.renderFile(`${this.viewPath}/${fileName}`, params);
                return c.html(template);
            });
        });
        return app;
    }
    registerRoute(routeOrRoutes, method, handler) {
        const { bullBoardQueues } = this;
        if (!bullBoardQueues) {
            throw new Error(`Please call 'setQueues' before using 'registerPlugin'`);
        }
        const routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
        routes.forEach((route) => {
            this.apiRoutes[method](route, async (c) => {
                let reqBody = {};
                if (method !== 'get') {
                    // Safely attempt to parse the request body, since the UI does not include a request body with most requests
                    try {
                        reqBody = await c.req.json();
                    }
                    catch { }
                }
                try {
                    const response = await handler({
                        queues: bullBoardQueues,
                        params: c.req.param(),
                        query: c.req.query(),
                        body: reqBody,
                        headers: c.req.header(),
                    });
                    if (response.status === 204) {
                        return c.body(null, 204);
                    }
                    return c.json(response.body, response.status || 200);
                }
                catch (e) {
                    if (!this.errorHandler || !(e instanceof Error)) {
                        throw e;
                    }
                    const response = this.errorHandler(e);
                    if (typeof response.body === 'string') {
                        return c.text(response.body, response.status !== 204 ? response.status : 500);
                    }
                    return c.json(response.body, response.status !== 204 ? response.status : 500);
                }
            });
        });
    }
}
exports.HonoAdapter = HonoAdapter;
//# sourceMappingURL=HonoAdapter.js.map
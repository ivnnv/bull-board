import type { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter, UIConfig } from '@bull-board/api/typings/app';
import type { serveStatic as nodeServeStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import type { serveStatic as bunServeStatic } from 'hono/bun';
import type { serveStatic as cloudflarePagesServeStatic } from 'hono/cloudflare-pages';
import type { serveStatic as cloudflareWorkersServeStatic } from 'hono/cloudflare-workers';
import type { serveStatic as denoServeStatic } from 'hono/deno';
export declare class HonoAdapter implements IServerAdapter {
    protected serveStatic: typeof bunServeStatic | typeof nodeServeStatic | typeof cloudflarePagesServeStatic | typeof cloudflareWorkersServeStatic | typeof denoServeStatic;
    /**
     * only required for Cloudflare Workers. you should import it like this:
     *
     *   import manifest from '__STATIC_CONTENT_MANIFEST'
     *
     * ... and pass it as-is to the HonoAdapter constructor.
     */
    protected manifest: Record<string, unknown>;
    protected bullBoardQueues: BullBoardQueues | undefined;
    protected errorHandler: ((error: Error) => ControllerHandlerReturnType) | undefined;
    protected uiConfig?: UIConfig;
    protected staticRoute?: string;
    protected staticPath?: string;
    protected entryRoute?: AppViewRoute;
    protected viewPath?: string;
    protected apiRoutes: Hono;
    protected basePath: string;
    constructor(serveStatic: typeof bunServeStatic | typeof nodeServeStatic | typeof cloudflarePagesServeStatic | typeof cloudflareWorkersServeStatic | typeof denoServeStatic, 
    /**
     * only required for Cloudflare Workers. you should import it like this:
     *
     *   import manifest from '__STATIC_CONTENT_MANIFEST'
     *
     * ... and pass it as-is to the HonoAdapter constructor.
     */
    manifest?: Record<string, unknown>);
    setBasePath(path: string): this;
    setStaticPath(staticRoute: string, staticPath: string): this;
    setViewsPath(viewPath: string): this;
    setErrorHandler(handler: (error: Error) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: readonly AppControllerRoute[]): this;
    setEntryRoute(routeDef: AppViewRoute): this;
    setQueues(bullBoardQueues: BullBoardQueues): this;
    setUIConfig(config: UIConfig): this;
    registerPlugin(): Hono<import("hono/types").BlankEnv, import("hono/types").BlankSchema, "/">;
    private registerRoute;
}

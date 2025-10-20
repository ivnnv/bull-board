import type { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter, UIConfig } from '@bull-board/api/typings/app';
import { Elysia } from 'elysia';
export declare class ElysiaAdapter implements IServerAdapter {
    private plugin;
    private readonly basePath;
    private entryRoute;
    private statics;
    private bullBoardQueues;
    private viewPath;
    private uiConfig;
    constructor(basePath?: string);
    setStaticPath(staticsRoute: string, staticsPath: string): ElysiaAdapter;
    setViewsPath(viewPath: string): ElysiaAdapter;
    setErrorHandler(handler: (error: Readonly<Error>) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: AppControllerRoute[]): ElysiaAdapter;
    setEntryRoute(routeDef: AppViewRoute): ElysiaAdapter;
    setQueues(bullBoardQueues: BullBoardQueues): ElysiaAdapter;
    setUIConfig(config?: UIConfig): ElysiaAdapter;
    registerPlugin(): Promise<Elysia<"", {
        decorator: {};
        store: {};
        derive: {};
        resolve: {};
    }, {
        typebox: {};
        error: {};
    }, {
        schema: {};
        standaloneSchema: {};
        macro: {};
        macroFn: {};
        parser: {};
    }, {}, {
        derive: {};
        resolve: {};
        schema: import("elysia").MergeSchema<{}, {}, "">;
        standaloneSchema: import("elysia/dist/types").PrettifySchema<{}>;
    }, {
        derive: {};
        resolve: {};
        schema: {};
        standaloneSchema: {};
    }>>;
    private registerRoute;
}

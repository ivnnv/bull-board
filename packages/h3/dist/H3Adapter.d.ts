import type { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter, UIConfig } from '@bull-board/api/typings/app';
export declare class H3Adapter implements IServerAdapter {
    private uiHandler;
    private basePath;
    private entryRoute;
    private statics;
    private errorHandler;
    private bullBoardQueues;
    private viewPath;
    private uiConfig;
    setBasePath(path: string): H3Adapter;
    setStaticPath(staticsRoute: string, staticsPath: string): H3Adapter;
    setViewsPath(viewPath: string): H3Adapter;
    setErrorHandler(handler: (error: Error) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: AppControllerRoute[]): H3Adapter;
    setEntryRoute(routeDef: AppViewRoute): H3Adapter;
    setQueues(bullBoardQueues: BullBoardQueues): H3Adapter;
    setUIConfig(config?: UIConfig): H3Adapter;
    registerHandlers(): import("h3").Router;
    private registerRoute;
}

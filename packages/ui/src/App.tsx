import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { Header } from './components/Header/Header';
import { HeaderActions } from './components/HeaderActions/HeaderActions';
import { Loader } from './components/Loader/Loader';
import { Menu } from './components/Menu/Menu';
import { Title } from './components/Title/Title';
import { useConfirm } from './hooks/useConfirm';
import { useUIConfig } from './hooks/useUIConfig';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguageWatch } from './hooks/useLanguageWatch';
import { useQueues } from './hooks/useQueues';
import { useScrollTopOnNav } from './hooks/useScrollTopOnNav';

const JobPageLazy = React.lazy(() =>
  import('./pages/JobPage/JobPage').then(({ JobPage }) => ({ default: JobPage }))
);

const QueuePageLazy = React.lazy(() =>
  import('./pages/QueuePage/QueuePage').then(({ QueuePage }) => ({ default: QueuePage }))
);

const OverviewPageLazy = React.lazy(() =>
  import('./pages/OverviewPage/OverviewPage').then(({ OverviewPage }) => ({
    default: OverviewPage,
  }))
);

export const App = () => {
  useScrollTopOnNav();
  const { actions: queueActions } = useQueues();
  const { confirmProps } = useConfirm();
  const { uiRoutes } = useUIConfig();
  useLanguageWatch();
  useDarkMode();

  useEffect(() => {
    queueActions.updateQueues();
  }, []);

  return (
    <>
      <Header>
        <Title />
        <HeaderActions />
      </Header>
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/queue/:name/:jobId" render={() => <JobPageLazy />} />
              <Route path="/queue/:name" render={() => <QueuePageLazy />} />
              <Route path="/" exact render={() => <OverviewPageLazy />} />

              <Route path="/instruments" exact render={() => {
                console.log("uiRoutes", uiRoutes); // eslint-disable-line no-console
                const instrumentsRoute = uiRoutes?.find(uiRoute => uiRoute.path === '/instruments');
                console.log("instrumentsRoute", instrumentsRoute); // eslint-disable-line no-console

                // const InstrumentsPage = instrumentsRoute.component!;
                // return instrumentsRoute.component ? <InstrumentsPage /> : <span>Route not found</span>;
              }} />

              {/* { uiRoutes?.map(uiRoute => {
                const Component = uiRoute.component!;
                return (
                  <Route
                    key={uiRoute.path}
                    path={uiRoute.path}
                    exact={uiRoute.exact}
                    // component={uiRoute.component}
                    render={(props) => <Component {...props} />}
                  />
                )}

                { uiRoutes?.map(uiRoute => {
                const Component = uiRoute.component!;
                return (
                  <Route
                    key={uiRoute.path}
                    path={uiRoute.path}
                    exact={uiRoute.exact}
                    // component={uiRoute.component}
                    render={(props) => {
                      if (uiRoute.render) {
                        return uiRoute.render(props);
                      }
                      console.log("Component", Component); // eslint-disable-line no-console
                      return <Component {...props} />}
                    }
                  />
                )}
              )} */}
            </Switch>
          </Suspense>
          <ConfirmModal {...confirmProps} />
        </div>
      </main>
      <Menu />
      <ToastContainer />
    </>
  );
};

import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {useAuthStore} from 'store/useAuthStore'

import { bootstrap } from 'modules/auth';
import { Structure } from 'components/structure';
import { Loader } from 'components/loader';
import PrivateRoute from './private-route.component';
import PublicRoute from './public-route.component';

import('../app-cosmos');
import('../i18n');

const Home = lazy(() => import('pages/home/home.component'));
const Module = lazy(() => import('pages/module/module.component'));

function Routes() {
  const setAuth = useAuthStore(state => state.setAuth)

  useEffect(() => {
    bootstrap.subscribe({
      next: (user) => {
        setAuth(user)
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Structure>
        <hot-toast />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/module" component={Module} />
            <PrivateRoute exact path="/auth/logout" component={Loader} />
            <PrivateRoute exact path="/auth/login" component={Loader} />
            <PrivateRoute exact path="/auth/renew" component={Loader} />
          </Suspense>
        </Switch>
      </Structure>
    </BrowserRouter>
  );
}

export default Routes;

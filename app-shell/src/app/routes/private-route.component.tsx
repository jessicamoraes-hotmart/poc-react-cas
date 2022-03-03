import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Loader } from 'components/loader';
import { PrivateErrorBoundary } from 'components/error';
import { useAuthStore } from 'store/useAuthStore'
import { bootstrap } from 'modules/auth';

interface IProps {
  component: any;
  exact: boolean;
  path: string;
}

function PrivateRoute(props: IProps) {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => <PrivateBootstrap {...props} />}
    />
  );
}

function PrivateBootstrap(props: IProps) {
  const auth = useAuthStore(state => state.auth)
  const Component = props.component;

  useEffect(() => {
    bootstrap.start();
  }, []);

  return !auth ? <Loader /> : (
    <PrivateErrorBoundary>
      <Component />
    </PrivateErrorBoundary>
  );
}

export default PrivateRoute;

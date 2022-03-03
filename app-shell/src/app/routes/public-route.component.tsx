import React from 'react';
import { Route } from 'react-router-dom';

import { PublicErrorBoundary } from 'components/error';

type PropsType = {
  component: any;
  exact: boolean;
  path: string;
};

function PublicRoute(props: PropsType) {
  const Component = props.component;

  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => (
        <PublicErrorBoundary>
          <Component />
        </PublicErrorBoundary>
      )} />
  );
}

export default PublicRoute;

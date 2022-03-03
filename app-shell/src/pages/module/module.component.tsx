import React, { lazy, Suspense } from 'react';
import { useAuthStore } from 'store/useAuthStore'

const Microfront = lazy(() => import('microfront/Microfront'));

function ModulePage() {
  const auth = useAuthStore(state => state.auth)
  console.log({ auth })
  return (
    <div>
      Module inside private route <br/>
      <Suspense fallback="loading...">
        <Microfront />
      </Suspense>
    </div>
  );
}

export default ModulePage;

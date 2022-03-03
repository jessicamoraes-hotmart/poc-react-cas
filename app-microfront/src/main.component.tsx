import React, { Suspense } from 'react'
import Microfront from './microfront.component'

import '@cosmos/loading'
import './i18n'

export default function MicrofrontMain() {
  return (
    <Suspense fallback={<hot-loading />}>
      <Microfront />
    </Suspense>
  )
}

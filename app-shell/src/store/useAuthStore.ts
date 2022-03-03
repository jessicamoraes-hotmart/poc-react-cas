import create from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthStatus } from './redux.interfaces'
import type { IRootState } from './redux.interfaces'
import { TAuth } from 'modules/auth';

export const useAuthStore = create<IRootState>(
  persist(
    (set, _) => ({
      auth: null,
      setAuth: (auth: TAuth): void => set({ auth })
    }),
    {
      name: 'app-space'
    }
  )
)
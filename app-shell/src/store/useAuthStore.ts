import create from 'zustand'
import { persist } from 'zustand/middleware'

import type { IRootState } from './auth.interfaces'
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
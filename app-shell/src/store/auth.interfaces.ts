import { TAuth } from 'modules/auth';

export interface IRootState {
  auth: TAuth
  setAuth: (auth: TAuth) => void
}

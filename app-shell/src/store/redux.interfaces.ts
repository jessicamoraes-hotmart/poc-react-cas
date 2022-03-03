import { TAuth } from 'modules/auth';

export interface IRootState {
  auth: TAuth
  setAuth: (auth: TAuth) => void
}

export enum AuthStatus {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  AUTHENTICATING = 'AUTHENTICATING',
  AUTHENTICATED = 'AUTHENTICATED'
}
export interface AuthStorage {
  token: string
  userInfo: object
  status: string
  readyToAuthenticate: AuthStatus
  setToken: (token: string) => void
}
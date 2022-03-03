import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuth } from './auth.interfaces';

function setAuth(state: TAuth, action: PayloadAction<TAuth>): TAuth {
  return action.payload;
}

export default createSlice({
  name: 'auth',
  initialState: null as TAuth,
  reducers: { setAuth }
});

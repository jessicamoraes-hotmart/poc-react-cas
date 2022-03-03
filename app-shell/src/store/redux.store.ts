import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authSlice } from 'modules/auth';
import { IRootState } from './redux.interfaces';

const rootReducer = {
  auth: authSlice.reducer
};

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;

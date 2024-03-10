import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'
import { stockReducer } from './stockSlice'

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(logger) },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export const useAppDispatch = () => { return useDispatch<AppDispatch>() }
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

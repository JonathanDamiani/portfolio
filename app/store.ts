import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import themeSwitcherReducer from '../features/themeSwitcher/themeSwitcherSlice'

export const store = configureStore({
  reducer: {
    themeSwitcher: themeSwitcherReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

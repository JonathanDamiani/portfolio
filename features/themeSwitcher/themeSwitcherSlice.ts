import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface IThemeSwitcher {
  value: 'light' | 'dark'
}

const initialState: IThemeSwitcher = {
  value: 'light',
}

export const themeSwitcherSlice = createSlice({
  name: 'themeSwitcher',
  initialState,
  reducers: {
    setLight: (state) => {
      state.value = 'light'
    },
    setDark: (state) => {
      state.value = 'dark'
    },
  },
})

export const { setLight, setDark } = themeSwitcherSlice.actions

export const selectThemeSwitcher = (state: RootState) =>
  state.themeSwitcher.value

export default themeSwitcherSlice.reducer

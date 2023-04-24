import { configureStore } from '@reduxjs/toolkit'
import cameraSlice from './slices/camera'
import searchedSlice from './slices/searched'

export const store = configureStore({
  reducer: { camera: cameraSlice, searched: searchedSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

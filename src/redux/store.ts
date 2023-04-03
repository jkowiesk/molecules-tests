import { configureStore } from '@reduxjs/toolkit'
import cameraSlice from './slices/camera'

export const store = configureStore({
  reducer: { camera: cameraSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

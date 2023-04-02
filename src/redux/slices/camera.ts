import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CameraState = 'perspective' | 'orthographic'

const initialState: { value: CameraState } = { value: 'perspective' }

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setCamera: (state, action: PayloadAction<CameraState>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCamera } = cameraSlice.actions

export default cameraSlice.reducer

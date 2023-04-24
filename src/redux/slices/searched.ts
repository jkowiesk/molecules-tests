import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: { value: string } = { value: '' }

export const searchedSlice = createSlice({
  name: 'searched',
  initialState,
  reducers: {
    setSearched: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearched } = searchedSlice.actions

export default searchedSlice.reducer

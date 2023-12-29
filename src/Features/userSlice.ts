import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  user: {}
}

const initialState: CounterState = {
  user: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<object>) => {
          state.user = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser } = counterSlice.actions

export default counterSlice.reducer
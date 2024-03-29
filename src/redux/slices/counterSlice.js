import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 383999 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

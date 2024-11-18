import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface DarkModeState {
  value: boolean;
}

// Define the initial state using that type
const initialState: DarkModeState = {
  value: false,
};

export const DarkModeSlice = createSlice({
  name: "DarkMode",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toogle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toogle } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice  from "./features/DarkMode/DarkMode";

export const store = configureStore({
  reducer: {
    DarkMode : DarkModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

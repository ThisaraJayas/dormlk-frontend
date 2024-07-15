import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    User:AuthReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
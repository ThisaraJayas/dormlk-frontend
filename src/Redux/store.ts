import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import PostReducer from "./Post/PostSlice";

export const store = configureStore({
  reducer: {
    User:AuthReducer,
    Post:PostReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import PostReducer from "./Post/PostSlice";
import AdminPostReducer from "./Admin/AdminPostSlice";
import CommentReducer from "./Comment/CommentSlice";

export const store = configureStore({
  reducer: {
    User:AuthReducer,
    Post:PostReducer,
    AdminPost:AdminPostReducer,
    Comment:CommentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
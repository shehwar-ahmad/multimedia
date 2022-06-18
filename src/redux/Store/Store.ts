import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../Reducers/Homepage";
import loginReducer from "../Reducers/Login";
export const store = configureStore({
  reducer: {
    homepage:homepageReducer,
    login:loginReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

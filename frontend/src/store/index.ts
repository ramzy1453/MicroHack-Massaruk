import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import Api from "../api";
const store = configureStore({
  reducer: {
    auth,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

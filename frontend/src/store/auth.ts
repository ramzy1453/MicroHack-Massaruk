import { IUser } from "./../types/index.d";
import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

export type Auth = {
  token: string;
  user?: IUser;
};
const initialState = {
  user:  null,
  token: token || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    removeAuth: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

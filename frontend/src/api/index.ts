import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./../types/index.d";
import Cookies from "js-cookie"
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "MassarukApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" ,  
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}),
  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      query: (body) => ({
        url: "auth/sign-in",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<
      any,
      {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      }
    >({
      query: (body) => ({
        url: "auth/sign-up",
        method: "POST",
        body: { ...body, role: "investisteur", fieldWork: "Normal" },
      }),
    }),
  }),
});

export default Api;

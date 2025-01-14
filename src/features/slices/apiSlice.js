import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => 'users',
    }),
    fetchUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery } = apiSlice;

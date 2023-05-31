import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;

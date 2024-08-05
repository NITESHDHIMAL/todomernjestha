import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () =>  `/products`,
    }),
    getProductId: builder.query({
      query: (id) => `/products/${id}`,
    }),


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetProductIdQuery, } = productApi
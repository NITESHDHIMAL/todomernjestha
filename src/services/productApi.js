import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `/products`,
    }),
    getProductId: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getProductCategory: builder.query({
      query: (cat) => `/products/category/${cat}`,
    }),


  }),
})
export const { useGetProductQuery, useGetProductIdQuery, useGetProductCategoryQuery } = productApi
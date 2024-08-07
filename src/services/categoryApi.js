import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/products/categories`,
    }), 


  }),
})
export const { useGetCategoryQuery, } = categoryApi
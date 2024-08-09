import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (par) => `/products${par}`,
    }),
    getProductId: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getProductCategory: builder.query({
      query: (cat) => `/products/category/${cat}`,
    }),

    storeProduct: builder.mutation({
      query: (formData) => ({ 
        url:`/products`,
        method: 'POST',
        body: formData
      })
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({ 
        url:`/products/${id}`,
        method: 'DELETE',
      })
    }),


  }),
})
export const { useGetProductQuery, useGetProductIdQuery, useGetProductCategoryQuery, useStoreProductMutation, useDeleteProductMutation,  } = productApi
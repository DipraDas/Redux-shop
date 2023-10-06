import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6060' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        })
    })
})

export const { useGetProductsQuery } = api;
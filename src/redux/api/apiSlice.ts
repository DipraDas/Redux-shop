import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6060' }),
    tagTypes: ['comments'], // ! Used for real time update
    endpoints: () => ({ })
})
import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        singleProduct: builder.query({
            query: (id) => `/product/${id}`
        }),
        postComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['comments'] // ! Used for clear the cache for updating new data here
        }),
        getComment: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ['comments'] // ! Used for real time update as result
        }),
    })
})

export const {
    useGetProductsQuery,
    useSingleProductQuery,
    usePostCommentMutation,
    useGetCommentQuery
} = productApi;
import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './shared'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  endpoints(builder) {
    return {
      fetchUsers: builder.query({ query: () => `/users` }),
      // fetchUserById: builder.query({ query: (photoId) => `/users/${photoId}` }),
      // addPhoto: builder.mutation({
      //   query: ({ payload }) => ({
      //     url: `/users`,
      //     method: 'POST',
      //     body: payload,
      //   }),
      // }),
    }
  },
})

export const { useFetchUsersQuery } = usersApi

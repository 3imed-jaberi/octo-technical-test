import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './shared'

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery,
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({ query: () => `/photos` }),
      // fetchPhotoById: builder.query({
      //   query: (photoId) => `/photos/${photoId}`,
      // }),
      // addPhoto: builder.mutation({
      //   query: ({ payload }) => ({
      //     url: `/photos`,
      //     method: 'POST',
      //     body: payload,
      //   }),
      // }),
    }
  },
})

export const { useFetchPhotosQuery } = photosApi

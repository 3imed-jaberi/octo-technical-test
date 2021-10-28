import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.OCTO_TEST_BASE_URL,
})

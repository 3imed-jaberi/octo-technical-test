/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { usersApi } from '../services/usersApi'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.fetchUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload
      }
    )
  },
})

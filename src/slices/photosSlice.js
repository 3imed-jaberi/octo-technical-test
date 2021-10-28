/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { photosApi } from '../services/photosApi'

const initialState = {
  photos: [],
}

export const photosSlice = createSlice({
  name: 'photosSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      photosApi.endpoints.fetchPhotos.matchFulfilled,
      (state, action) => {
        state.photos = action.payload
      }
    )
  },
})

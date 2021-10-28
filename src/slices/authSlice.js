// /* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import { authApi } from '../services/authApi'

// const initialState = {}

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       authApi.endpoints.login.matchFulfilled,
//       (state, action) => {
//         state.accessToken = action.payload.accessToken
//       }
//     )
//   },
// })

// export const AUTH_PERSIST_KEY_LOCALSTORAGE = 'rtk:auth'

// export const authReducer = persistReducer(
//   {
//     key: 'rtk:auth',
//     storage,
//     whitelist: ['accessToken'],
//   },
//   authSlice.reducer
// )

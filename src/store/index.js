import { configureStore } from '@reduxjs/toolkit'

import { usersApi } from '../services/usersApi'
import { photosApi } from '../services/photosApi'
import { usersSlice } from '../slices/usersSlice'
import { photosSlice } from '../slices/photosSlice'

/**
 * - we can use redux-persist to persist the state when we refrech; https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 * - we can use authentication middlware like this with an action that reset the state;
 *  ````
 *  import { isRejectedWithValue } from '@reduxjs/toolkit'
 *  import { resetStateAction } from '../actions/resetState'
 *  export const unauthenticatedMiddleware =
 *  ({ dispatch }) => (next) => (action) => {
 *     if (isRejectedWithValue(action) && action.payload.status === 401) {
 *       dispatch(resetStateAction())
 *     }
 *     return next(action)
 *   }
 *  ```
 *  - Also, I use Redux Toolkit because it's the modern solution
 *  and it's recommended from the Redux team with the Duck Pattern(Slices).
 */
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [photosSlice.name]: photosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, photosApi.middleware),
})

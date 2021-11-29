import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    superheros: rootReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

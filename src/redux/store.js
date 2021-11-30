import { configureStore } from '@reduxjs/toolkit'
import { superherosReducers } from './superheros'

export const store = configureStore({
  reducer: {
    superheros: superherosReducers.rootReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

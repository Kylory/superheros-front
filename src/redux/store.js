import { configureStore } from '@reduxjs/toolkit'

import { superherosReducer } from './redux/superheros'
// import { contactsReducer } from 'redux/contacts'

export const store = configureStore({
  reducer: {
    superheros: superherosReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { superherosOperations } from 'redux/superheros'

const superherosReducer = createReducer([], {
  [superherosOperations.getAllSuperheros.fulfilled]: (_, { payload }) =>
    payload,
  //   [superherosOperations.addContact]: (state, { payload }) => [
  //     ...state,
  //     payload,
  //   ],
  [superherosOperations.addSuperhero.fulfilled]: () => {},
  //   [superherosOperations.deleteContact]: (state, { payload }) =>
  //     state.filter((contact) => contact.id !== payload),
})

export const rootReducer = combineReducers({
  contactsList: superherosReducer,
})

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
  // [superherosOperations.addSuperhero.fulfilled]: () => {},
  //   [superherosOperations.deleteContact]: (state, { payload }) =>
  //     state.filter((contact) => contact.id !== payload),
})

const addModalReducer = createReducer(false, {
  [superherosOperations.openAddModal]: () => true,
  [superherosOperations.closeAddModal]: () => false,
})

const editModalReducer = createReducer(false, {
  [superherosOperations.openEditModal]: () => true,
  [superherosOperations.closeEditModal]: () => false,
})

const needToReloadSuperherosReducer = createReducer(false, {
  [superherosOperations.reloadSuperheros]: () => true,
  // [superherosOperations.addSuperhero.pending]: () => true,
  [superherosOperations.addSuperhero.fulfilled]: () => true,
  [superherosOperations.getAllSuperheros.fulfilled]: () => false,
})

export const rootReducer = combineReducers({
  superherosList: superherosReducer,
  isAddModalOpen: addModalReducer,
  isEditModalOpen: editModalReducer,
  needToReloadSuperheros: needToReloadSuperherosReducer,
})

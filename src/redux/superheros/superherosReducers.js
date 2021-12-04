import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { superherosOperations } from 'redux/superheros'

const superherosReducer = createReducer([], {
  [superherosOperations.getAllSuperheros.fulfilled]: (_, { payload }) =>
    payload.docs,
})

const superheroReducer = createReducer(null, {
  [superherosOperations.getSuperheroById.fulfilled]: (_, { payload }) =>
    payload,
  [superherosOperations.updateSuperheroById.fulfilled]: (_, { payload }) =>
    payload,
  [superherosOperations.clearSuperheroState]: () => null,
})

const addModalReducer = createReducer(false, {
  [superherosOperations.openAddModal]: () => true,
  [superherosOperations.closeAddModal]: () => false,
})

const editModalReducer = createReducer(false, {
  [superherosOperations.openEditModal]: () => true,
  [superherosOperations.closeEditModal]: () => false,
})

const pageReducer = createReducer(1, {
  [superherosOperations.getAllSuperheros.fulfilled]: (_, { payload }) =>
    payload.page,
  [superherosOperations.changePage.fulfilled]: (_, { payload }) => payload,
})

const totalDocsReducer = createReducer(1, {
  [superherosOperations.getAllSuperheros.fulfilled]: (_, { payload }) =>
    payload.totalDocs,
})

export const rootReducer = combineReducers({
  superherosList: superherosReducer,
  superhero: superheroReducer,
  isAddModalOpen: addModalReducer,
  isEditModalOpen: editModalReducer,
  page: pageReducer,
  totalDocs: totalDocsReducer,
})

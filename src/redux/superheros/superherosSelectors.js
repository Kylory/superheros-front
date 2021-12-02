// import { createSelector } from '@reduxjs/toolkit'

const getSuperheros = (state) => state.superheros.superherosList

const isAddModalOpen = (state) => state.superheros.isAddModalOpen
const isEditModalOpen = (state) => state.superheros.isEditModalOpen
const needToReloadSuperheros = (state) =>
  state.superheros.needToReloadSuperheros
const page = (state) => state.superheros.page
const totalDocs = (state) => state.superheros.totalDocs

// const getSuperheroById = (state) => {
//   //   if (state.superheros) {
//   //     const superheros = getSuperheros(state)
//   //     console.log('superheros', superheros)
//   //   }
//   //   const superheros = state.superheros
//   console.log('superheros', state.superheros)
//   // const superhero = superheros.find(
//   //   (superhero) => superhero._id === superheroId
//   // )
//   // console.log('superhero', superhero)
// }

// const getSuperheroById = createSelector([getSuperheros], (superheroId) => {})

// const getFilter = (state) => state.contacts.filter
// const isLoading = (state) => state.contacts.isLoading
// const error = (state) => state.contacts.error

export {
  getSuperheros,
  isAddModalOpen,
  isEditModalOpen,
  needToReloadSuperheros,
  page,
  totalDocs,
}

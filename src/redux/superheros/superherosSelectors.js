const getSuperheros = (state) => state.superheros.superherosList
const getSuperheroById = (state) => state.superheros.superhero
const isAddModalOpen = (state) => state.superheros.isAddModalOpen
const isEditModalOpen = (state) => state.superheros.isEditModalOpen
const page = (state) => state.superheros.page
const totalDocs = (state) => state.superheros.totalDocs

export {
  getSuperheros,
  isAddModalOpen,
  isEditModalOpen,
  page,
  totalDocs,
  getSuperheroById,
}

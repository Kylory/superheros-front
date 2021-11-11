import axios from 'axios'

const API_OPTIONS = {
  BASE_URL: 'https://app-superheros.herokuapp.com/api',
}

async function getAllSuperheros(page) {
  const { BASE_URL } = API_OPTIONS

  const response = await axios.get(
    `${BASE_URL}/superheros?page=${page}&limit=5`
  )

  return response.data.superheros
}

async function getSuperheroById(superheroId) {
  const { BASE_URL } = API_OPTIONS
  const response = await axios.get(`${BASE_URL}/superheros/${superheroId}`)

  return response.data
}

async function addSuperhero(data) {
  const { BASE_URL } = API_OPTIONS
  const response = await axios.post(`${BASE_URL}/superheros`, data)

  return response
}

async function deleteSuperheroById(superheroId) {
  const { BASE_URL } = API_OPTIONS
  const response = await axios.delete(`${BASE_URL}/superheros/${superheroId}`)

  return response.data
}

async function updateSuperheroBuId(superheroId, data) {
  const { BASE_URL } = API_OPTIONS
  const response = await axios.put(
    `${BASE_URL}/superheros/${superheroId}`,
    data
  )

  return response
}

export {
  getAllSuperheros,
  getSuperheroById,
  addSuperhero,
  deleteSuperheroById,
  updateSuperheroBuId,
}

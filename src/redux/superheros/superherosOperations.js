import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://app-superheros.herokuapp.com/api'

export const getAllSuperheros = createAsyncThunk(
  'superheros/getAllSuperheros',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/superheros?page=${page}&limit=5`)
      // console.log('getAllSuperheros response', response)
      return response.data.superheros
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// export const getSuperheroById = createAsyncThunk(
//   'superheros/getSuperheroById',
//   async (superheroId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/superheros/${superheroId}`)
//       console.log('response', response)
//       return response
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )

export const addSuperhero = createAsyncThunk(
  'superheros/addSuperhero',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/superheros', data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// async function deleteSuperheroById(superheroId) {
//   const { BASE_URL } = API_OPTIONS
//   const response = await axios.delete(`${BASE_URL}/superheros/${superheroId}`)

//   return response.data
// }

export const deleteSuperheroById = createAsyncThunk(
  'superheros/deleteSuperheroById',
  async (superheroId, { rejectWithValue }) => {
    try {
      await axios.delete(`/superheros/${superheroId}`)
      return superheroId
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// async function updateSuperheroBuId(superheroId, data) {
//   const { BASE_URL } = API_OPTIONS
//   const response = await axios.put(
//     `${BASE_URL}/superheros/${superheroId}`,
//     data
//   )

//   return response
// }

export const updateSuperheroBuId = createAsyncThunk(
  'superheros/updateSuperheroBuId',
  async (superheroId, data, { rejectWithValue }) => {
    try {
      await axios.put(`/superheros/${superheroId}`, data)
      return superheroId
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const openAddModal = createAction('superheros/openAddModal')
export const closeAddModal = createAction('superheros/closeAddModal')

export const openEditModal = createAction('superheros/openEditModal')
export const closeEditModal = createAction('superheros/closeEditModal')

export const reloadSuperheros = createAction('superheros/reloadSuperheros')

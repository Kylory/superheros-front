import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://app-superheros.herokuapp.com/api'

// async function getAllSuperheros(page) {
//   const { BASE_URL } = API_OPTIONS

//   const response = await axios.get(
//     `${BASE_URL}/superheros?page=${page}&limit=5`
//   )

//   return response.data.superheros
// }

export const getAllSuperheros = createAsyncThunk(
  'superheros/getAllSuperheros',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/superheros', page)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// async function getSuperheroById(superheroId) {
//   const { BASE_URL } = API_OPTIONS
//   const response = await axios.get(`${BASE_URL}/superheros/${superheroId}`)

//   return response.data
// }

export const getSuperheroById = createAsyncThunk(
  'superheros/getSuperheroById',
  async (superheroId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/superheros', superheroId)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// async function addSuperhero(data) {
//   const { BASE_URL } = API_OPTIONS
//   const response = await axios.post(`${BASE_URL}/superheros`, data)

//   return response
// }

export const addSuperhero = createAsyncThunk(
  'superheros/getSuperheroById',
  async (
    { nickname, real_name, origin_description, superpowers, catch_phrase },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post('/contacts', {
        nickname: `${nickname}`,
        real_name: `${real_name}`,
        origin_description: `${origin_description}`,
        superpowers: `${superpowers}`,
        catch_phrase: `${catch_phrase}`,
      })
      return data
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

// async function updateSuperheroBuId(superheroId, data) {
//   const { BASE_URL } = API_OPTIONS
//   const response = await axios.put(
//     `${BASE_URL}/superheros/${superheroId}`,
//     data
//   )

//   return response
// }

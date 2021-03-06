import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://app-superheros.herokuapp.com/api'

export const getAllSuperheros = createAsyncThunk(
  'superheros/getAllSuperheros',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/superheros?page=${page}&limit=5`)
      return response.data.superheros
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getSuperheroById = createAsyncThunk(
  'superheros/getSuperheroById',
  async (superheroId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/superheros/${superheroId}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addSuperhero = createAsyncThunk(
  'superheros/addSuperhero',
  async (data, { rejectWithValue }) => {
    try {
      await axios.post('/superheros', data)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

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

export const updateSuperheroById = createAsyncThunk(
  'superheros/updateSuperheroById',
  async ({ superheroId, superhero }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/superheros/${superheroId}`, superhero)
      return response.data.updatedSuperhero
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const openAddModal = createAction('superheros/openAddModal')
export const closeAddModal = createAction('superheros/closeAddModal')

export const openEditModal = createAction('superheros/openEditModal')
export const closeEditModal = createAction('superheros/closeEditModal')

export const clearSuperheroState = createAction(
  'superheros/clearSuperheroState'
)

export const changePage = createAsyncThunk(
  'superheros/changePage',
  async (page, { rejectWithValue }) => {
    return page
  }
)

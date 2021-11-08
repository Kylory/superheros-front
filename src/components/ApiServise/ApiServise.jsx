import axios from 'axios'

const API_OPTIONS = {
  BASE_URL: 'https://app-superheros.herokuapp.com/api',
  // MEDIA_TYPE: 'all',
  // TIME_WINDOW: 'day',
  // API_KEY: '75ca290b8be3cd62eb0cb9206dc4c97a',
}

async function getAllSuperheros() {
  const { BASE_URL } = API_OPTIONS

  const response = await axios.get(`${BASE_URL}/superheros?page=1&limit=30`)
  console.log(response.data.superheros)
  return response.data.superheros.docs
}

async function getSuperheroById(superheroId) {
  const { BASE_URL } = API_OPTIONS

  const response = await axios.get(`${BASE_URL}/superheros/${superheroId}`)
  return response
}

async function addSuperhero(data) {
  const { BASE_URL } = API_OPTIONS
  // console.log(data)
  const response = await axios.post(`${BASE_URL}/superheros`, data)
  return response
}

// async function fetchMovieByQuery(uqery) {
//   const { BASE_URL, API_KEY } = API_OPTIONS

//   const response = await axios.get(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${uqery}&page=1&include_adult=false`
//   )
//   return response.data.results
// }

// async function FetchMovieCast(movieId) {
//   const { BASE_URL, API_KEY } = API_OPTIONS

//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
//   )

//   return response.data.cast
// }

// async function FetchMovieReviews(movieId) {
//   const { BASE_URL, API_KEY } = API_OPTIONS

//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
//   )

//   return response.data.results
// }

export {
  getAllSuperheros,
  getSuperheroById,
  addSuperhero,
  // FetchMovieCast,
  // fetchMovieByQuery,
  // FetchMovieReviews,
}

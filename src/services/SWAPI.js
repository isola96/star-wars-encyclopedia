/**
 * SWAPI The Star Wars API
 *
 * <https://swapi.dev/api/>
 */
import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api/' 

// Get all films 
const getFilms = async () => {
	const res = await axios.get('/films')
    return res.data
}

// Get one film
const getFilm = async (id) => {
    const res = await axios.get(`/films/${id}`)
    return res.data
}

// Get all people
const getPeople = async (page) => {
    const res = await axios.get(`/people/?page=${page}`)
    return res.data
}

// Get one person 
const getPerson = async (id) => {
    const res = await axios.get(`/people/${id}`)
    return res.data
}

export default {
    getFilms,
    getPeople,
    getFilm,
    getPerson,
}
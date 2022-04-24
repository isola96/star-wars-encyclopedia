/**
 * Hacker News API service
 *
 * <https://hn.algolia.com/api>
 */
import axios from 'axios'

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}

export const search = async (query, page) => {
	return get(`/search?query=${query}&tags=story&page=${page}`)
}
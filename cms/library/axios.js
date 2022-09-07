import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api'
})

export const get = async (path) => {
	return await api.get(path).then((res) => res.data)
}

export const post = async (path, credentials) => {
	await api.post(path, credentials)
}

export const update = async (path, credentials) => {
	await api.patch(path, credentials)
}

export const remove = async (path, credentials) => {
	await api.delete(path, { data: credentials })
}

export default api

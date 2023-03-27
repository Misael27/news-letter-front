import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:5202/api' });

const getByIdApi = async (id) => {
	const response = await client.get(`/NewsLetter/${id}`);
	return response.data;
}

const addOrUpdateNewsLetterApi = async (requestBody) => {
	const response = await client.post('/NewsLetter/upsert', requestBody);
	return response.data;
}

const removeNewsLetterApi = async (id) => {
	const response = await client.delete(`/NewsLetter/${id}`);
	return response.status === 200 ? id : 0;
}

export {
	getByIdApi,
	addOrUpdateNewsLetterApi,
	removeNewsLetterApi
}
  
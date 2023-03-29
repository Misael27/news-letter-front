import axios from 'axios'
import AuthApi from './AuthApi';

const client = axios.create({ baseURL: 'http://localhost:5202/api' });

const getByIdApi = async (id) => {
	const response = await client.get(`/NewsLetter/${id}`, { headers: AuthApi.authHeader() });
	return response.data;
}

const addOrUpdateNewsLetterApi = async (requestBody) => {
	const response = await client.post('/NewsLetter/upsert', requestBody,{ headers: AuthApi.authHeader() });
	return response.data;
}

const removeNewsLetterApi = async (id) => {
	const response = await client.delete(`/NewsLetter/${id}`, { headers: AuthApi.authHeader() });
	return response.status === 200 ? id : 0;
}

export {
	getByIdApi,
	addOrUpdateNewsLetterApi,
	removeNewsLetterApi
}
  
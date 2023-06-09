import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:5202/api' });

const create = async (fullName, email, password) => {
    const response = await client.post('/Auth/create', {
        fullName,
        email,
        password
    });
    return response.data;
}

const login = async (email, password) => {
    const response = await client.post('/Auth', {
        email,
        password
    });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return { "Authorization": `bearer ${user.token}` };
    } else {
        return {};
    }
}

const logout = () => {
    localStorage.removeItem("user");
};

const AuthApi = {
    create,
    login,
    logout,
    authHeader
}

export default AuthApi;
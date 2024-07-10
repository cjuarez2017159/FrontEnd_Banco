import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/bank/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
        if (userDetails) {
            const token = JSON.parse(userDetails || {}).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try {
        console.log({ data })
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getAllAccounts = async () => {
    try {
        const response = await apiClient.get('/accounts'); // Asegúrate de que la ruta coincida
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deactivateAccount = async (id) => {
    try {
        const response = await apiClient.post(`/accounts/${id}/deactivate`);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const editAccount = async (id, data) => {
    try {
        const response = await apiClient.put(`/accounts/${id}`, data);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

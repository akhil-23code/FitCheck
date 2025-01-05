import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

interface ResponseData {
    message?: string;
    error?: string;
    token?: string;
}

export const registerUser = async (username: string, password: string): Promise<ResponseData> => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, password });
        return response.data;
    } catch (error: any) {
        return { error: error.response?.data?.error || 'An error occurred' };
    }
};

export const loginUser = async (username: string, password: string): Promise<ResponseData> => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error: any) {
        return { error: error.response?.data?.error || 'An error occurred' };
    }
};

// tools/api.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json', // Add any custom headers here
    },
});

export const fetchData = async (url, options = {}) => {
    try {
        const response = await axiosInstance(url, options);
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
    }
};

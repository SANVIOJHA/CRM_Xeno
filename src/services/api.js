
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCustomers = async () => {
    try {
        const response = await api.get('/customers');
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
};

export const addCustomer = async (customer) => {
    try {
        const response = await api.post('/customers', customer);
        return response.data;
    } catch (error) {
        console.error('Error adding customer:', error);
    }
};

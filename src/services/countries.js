import api from './apiConfig.js';

export const getCountries = async () => {
    try {
        const res = await api.get('/countries');
        return res.data;
    } catch (error) {
        console.error('Error getting all countries: ', error);
    }
};

    export const getCountry = async (id) => {
    try {
        const res = await api.get(`/countries/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error getting country: ', error);
    }
};

export const createCountry = async (countryData) => {
    try {
        const res = await api.post('/countries', countryData);
        return res.data;
    } catch (error) {
        console.error('Error creating country: ', error);
    }
};

export const editCountry = async (id, countryData) => {
    try {
        const res = await api.put(`/countries/${id}`. countryData);
        return res.data;
    } catch (error) {
        console.error('Error updating country: ', error);
    }
};

export const deleteCountry = async (id) => {
    try {
        const res = await api.delete(`/countries/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error deleting country: ', error);
    }
};
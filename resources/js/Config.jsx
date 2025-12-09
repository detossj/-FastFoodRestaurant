import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URL = `${API_BASE_URL}/api`;

export default {
    API_BASE_URL,
    getProductsByCategory: (id) => axios.get(`${API_URL}/category/${id}/products`),
};

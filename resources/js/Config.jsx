import axios from "axios";

const API_BASE_URL = "http://fastfoodrestaurant.test";

const API_URL = `${API_BASE_URL}/api`;

export default {
    API_BASE_URL,
    getProductsByCategory: (id) => axios.get(`${API_URL}/category/${id}/products`),
};

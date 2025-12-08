import axios from "axios";

const base_api_url = "http://localhost:8000/api";

export default {

    getProductsByCategory: (id) => axios.get(`${base_api_url}/category/${id}/products`),
}
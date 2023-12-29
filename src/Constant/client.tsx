import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:3005/api'
});


export default apiClient;
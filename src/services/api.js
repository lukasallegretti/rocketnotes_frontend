import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-0m76.onrender.com"
});


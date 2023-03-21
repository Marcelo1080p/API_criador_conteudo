import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const getAllCriadores = () => {
    return api.get("/criador")
};

export const getCriadorByName = (nome) => {
    return api.get(`/criador/search/${nome}`);
}
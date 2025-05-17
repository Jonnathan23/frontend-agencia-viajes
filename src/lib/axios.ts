import axios from "axios"

/**
 * @description Funcion para crear una instancia de axios para hacer peticiones a la api
 */
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND
})

export default api
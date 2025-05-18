import { isAxiosError } from "axios"

/**
 * @description Funcion para manejar los errores de la api (Axios)
 * @param error 
 */
export const handlerApiError = (error: unknown) => {
    if (isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data.errors)) {
            throw new Error(error.response.data.errors[0].msg)
        }
        throw new Error(error.response.data.errors)
    }
    throw new Error('Error con el servidor')
}
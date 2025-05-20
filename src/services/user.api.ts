import type { User } from "../types"
import { handlerApiError } from "../utils/utils"
import api from "../lib/axios"
import { userSchema } from "../utils/auth.schema"
import { ErrorWithServer } from "../errors/errors"

export type UserApi = {
    formData: User
    usr_id: User['usr_id']
}

// Get
export const getUserById = async ({ usr_id }: Pick<UserApi, 'usr_id'>) => {
    try {
        const { data } = await api.get(`/users/${usr_id}`);

        const response = userSchema.safeParse(data);
        if (response.success) return response.data

        const errorServer = new ErrorWithServer('Error de tipado');
        errorServer.errorAlert();

    } catch (error) {
        handlerApiError(error)
    }
}


// Post

/**
 * @description Funcion para crear un usuario
 * @param formData - Datos del usuario
 */
export const createUser = async ({ formData }: Pick<UserApi, 'formData'>) => {
    try {
        const { data } = await api.post<string>('/users', formData);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

/**
 * @description Funcion para actualizar un usuario
 * @param param0 
 * @returns 
 */
export const updateUser = async ({ usr_id, formData }: Pick<UserApi, 'usr_id' | 'formData'>) => {
    try {
        const url = `http://localhost:4000/api/travels/users/${usr_id}`
        const { data } = await api.put<string>(url, formData);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}
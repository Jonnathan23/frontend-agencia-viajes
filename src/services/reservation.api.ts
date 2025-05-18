import { ErrorWithServer } from "../errors/errors"
import api from "../lib/axios"
import type { Flight, Reservation, ReservationForm, ReservationUpdateStatus, User } from "../types"
import { reservationSchema } from "../utils/travels.schema"
import { handlerApiError } from "../utils/utils"

export type ReservationApi = {
    formData: ReservationForm
    res_id: Reservation['res_id']
    usr_id: User['usr_id']
    flt_id: Flight['flt_id']
    reservationStatus: ReservationUpdateStatus
}

// Gets
export const getAllReservations = async () => {
    try {
        const { data } = await api.get('/reservations');
        const response = reservationSchema.array().safeParse(data);

        if (response.success) return response.data

        const errorServer = new ErrorWithServer('Error de tipado');
        errorServer.errorAlert();
        return [] as Reservation[]
    } catch (error) {
        handlerApiError(error)
    }
}

export const getReservationsByUser = async ({ usr_id }: Pick<ReservationApi, 'usr_id'>) => {
    try {
        const url = `/reservations/user/${usr_id}`
        const { data } = await api.get(url);
        const response = reservationSchema.array().safeParse(data);

        if (response.success) return response.data

        const errorServer = new ErrorWithServer('Error de tipado');
        errorServer.errorAlert();
        return [] as Reservation[]
    } catch (error) {
        handlerApiError(error)
    }
}


// Post
export const createReservation = async ({ formData, usr_id, flt_id }: Pick<ReservationApi, 'formData' | 'usr_id' | 'flt_id'>) => {
    try {
        const url = `/reservations/create/${usr_id}/${flt_id}`
        const { data } = await api.post<string>(url, formData);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

// Patch
export const updateReservationState = async ({ reservationStatus, usr_id, flt_id }: Pick<ReservationApi, 'reservationStatus' | 'usr_id' | 'flt_id'>) => {
    try {
        const url = `/reservations/state/${usr_id}/${flt_id}`
        const { data } = await api.patch<string>(url, reservationStatus);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}


// Delete

export const deleteReservation = async ({ res_id }: Pick<ReservationApi, 'res_id'>) => {
    try {
        const url = `/reservations/${res_id}`
        const { data } = await api.delete<string>(url);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}
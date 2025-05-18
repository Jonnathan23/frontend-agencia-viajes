import { ErrorWithServer } from "../errors/errors";
import api from "../lib/axios";
import type { Flight, FlightForm, FlightUpdateActive } from "../types"
import { flightSchema } from "../utils/travels.schema";
import { handlerApiError } from "../utils/utils";

export type FlightApi = {
    formData: FlightForm
    flt_id: Flight['flt_id']
    active: FlightUpdateActive
}

//Gets

export const getAllFlights = async () => {
    try {
        const { data } = await api.get('/flights');
        const response = flightSchema.array().safeParse(data);

        if (response.success) return response.data

        const errorServer = new ErrorWithServer('Error de tipado');
        errorServer.errorAlert();
        return [] as Flight[]
    } catch (error) {
        handlerApiError(error)
    }
}


export const getFlightById = async ({ flt_id }: Pick<FlightApi, 'flt_id'>) => {
    try {
        const url = `/flights/${flt_id}`;
        const { data } = await api.get(url);
        const response = flightSchema.safeParse(data);

        if (response.success) return response.data

        const errorServer = new ErrorWithServer('Error de tipado');
        errorServer.errorAlert();
        return {} as FlightForm
    } catch (error) {
        handlerApiError(error)
    }
}

//Post
export const createFlight = async ({ formData }: Pick<FlightApi, 'formData'>) => {
    try {
        const url = '/flights';
        const { data } = await api.post(url, formData);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

// Patch
/**
 * @description Funcion para actualizar el estado de un vuelo (active)
 * @param flt_id 
 * @param active
 * @returns 
 */
export const updateFlightState = async ({ flt_id, active }: Pick<FlightApi, 'flt_id' | 'active'>) => {
    try {
        const url = `/flights/state/${flt_id}`;
        const { data } = await api.patch<string>(url, active);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}


// Delete

export const deleteFlight = async ({ flt_id }: Pick<FlightApi, 'flt_id'>) => {
    try {
        const url = `/flights/${flt_id}`;
        const { data } = await api.delete<string>(url);
        return data
    } catch (error) {
        handlerApiError(error)
    }
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createFlight, deleteFlight, getAllFlights, getFlightById, updateFlightState, type FlightApi } from "../services/flight.api"
import { toast } from "react-toastify"


//*Gets
/**
 * @description Hook para obtener todos los vuelos
 * @returns 
 */
export const useGetAllFlights = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['flights'],
        queryFn: getAllFlights
    })

    return { data, isLoading, isError }
}

/**
 * @description Hook para obtener un vuelo por id
 * @param flt_id 
 * @returns 
 */
export const useGetFlightById = ({ flt_id }: Pick<FlightApi, 'flt_id'>) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['flight-flt_id', flt_id],
        queryFn: () => getFlightById({ flt_id })
    })

    return { data, isLoading, isError }
}

//*Posts
/**
 * @description Hook para crear un vuelo
 * @returns 
 */
export const useCreateFlight = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createFlight,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['flights'] });
            toast.success(data)
        }
    })
}

//*Patches
/**
 * @description Hook para actualizar el estado de un vuelo
 * @param flt_id
 * @returns 
 */
export const useUpdateFlightStatus = ({ flt_id }: Pick<FlightApi, 'flt_id'>) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateFlightState,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['flight-flt_id', flt_id] });
            queryClient.invalidateQueries({ queryKey: ['flights'] });
            toast.success(data)
        }
    })
}

//*Deletes
/**
 * @description Hook para eliminar un vuelo
 * @returns 
 */
export const useDeleteFlight = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteFlight,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['flights'] });
            toast.success(data)
        }
    })
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createReservation, getAllReservations, getReservationsByUser, updateReservationState, type ReservationApi } from "../services/reservation.api"
import { toast } from "react-toastify"

//*Gets
/**
 * @description Hook para obtener las reservas de un usuario
 * @param usr_id 
 * @returns 
 */
export const useGetReservationsByUser = ({ usr_id }: Pick<ReservationApi, 'usr_id'>) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['reservations-usr_id', usr_id],
        queryFn: () => getReservationsByUser({ usr_id })
    })

    return { data, isLoading, isError }
}

/**
 * @description Hook para obtener todas las reservas
 * @returns 
 */
export const useGetAllReservations = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['reservations'],
        queryFn: getAllReservations
    })

    return { data, isLoading, isError }
}

//*Posts

/**
 * @description Hook para crear una reserva
 * @returns 
 */
export const useCreateReservation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createReservation,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast.success(data)
        }
    })
}


//*Patches

export const useUpdateReservation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateReservationState,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast.success(data)
        }
    })
}

//*Deletes
export const useDeleteReservation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateReservationState,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast.success(data)
        }
    })
}
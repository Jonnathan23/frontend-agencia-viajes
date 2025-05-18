import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createUser, getUserById, updateUser, type UserApi } from "../services/user.api"
import { toast } from "react-toastify"


/**
 * @description Hook para obtener un usuario
 * @param param0 
 * @returns 
 */
export const useGetUser = ({ usr_id }: Pick<UserApi, 'usr_id'>) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: () => getUserById({ usr_id })
    })

    return { data, isLoading, isError }
}

/**
 * @description Hook para crear un usuario
 * @returns 
 */
export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            toast.success(data)
        }
    })
}

/**
 * @description Hook para actualizar un usuario
 * @returns 
 */
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUser,
        onError: (error) => toast.error(error.message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            toast.success(data)
        }
    })
}
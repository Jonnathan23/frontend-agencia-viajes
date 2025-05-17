import { number, object, string, z } from "zod";


//* |-----------------| Flight |-----------------|
export const flightIsActive = {
    TRUE: "Si",
    FALSE: "No"
} as const

export const flightSchema = object({
    flt_id: string(),
    flt_flight_number: string(),
    flt_origin: string(),
    flt_destination: string(),
    flt_departure_time: string(),
    flt_arrival_time: string(),
    flt_total_seats: number(),
    flt_price: number(),
    flt_is_active: z.enum([flightIsActive.TRUE, flightIsActive.FALSE]),
    flt_created_at: string(),
    flt_updated_at: string(),
})


//* |-----------------| Reservation |-----------------|

export const reservationStatus = {
    PENDING: "Pendiente",
    CONFIRMED: "Confirmada",
    CANCELED: "Cancelada"
} as const

export type ReservationStatus = typeof reservationStatus[keyof typeof reservationStatus]

export const reservationSchema = object({
    res_id: string(),
    res_usr_id: string(),
    res_flt_id: string(),
    res_reserved_at: string(),
    res_status: z.enum([reservationStatus.PENDING, reservationStatus.CONFIRMED, reservationStatus.CANCELED]),
    res_count_consumer: string(),
})
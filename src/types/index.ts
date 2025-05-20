import { z } from "zod"
import type { userSchema } from "../utils/auth.schema"
import type { flightSchema, reservationSchema } from "../utils/travels.schema"

//* |-----------------| User |-----------------|
export type User = z.infer<typeof userSchema>
export type UserForm = Pick<User, "usr_first_name" | "usr_last_name" | "usr_email">


//* |-----------------| Flight |-----------------|
export type Flight = z.infer<typeof flightSchema>
export type FlightForm = Pick<Flight, "flt_flight_number" | "flt_origin" | "flt_destination" | "flt_departure_time" | "flt_arrival_time" | "flt_total_seats" | "flt_price">
export type FlightUpdateActive = Pick<Flight, "flt_is_active">


//* |-----------------| Reservation |-----------------|
export type Reservation = z.infer<typeof reservationSchema>
export type ReservationForm = Pick<Reservation, 'res_usr_id' | 'res_flt_id' | 'res_reserved_at' | 'res_status' | 'res_count_consumer'>
export type ReservationUpdateStatus = Pick<Reservation, 'res_status'>

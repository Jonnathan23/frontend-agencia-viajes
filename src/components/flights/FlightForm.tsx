import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FlightForm } from "../../types";
import ErrorMessage from "../ErrorMessage";

type FlightFormProps = {
    register: UseFormRegister<FlightForm>
    errors: FieldErrors<FlightForm>
}

export default function FlightFormData({ register, errors }: FlightFormProps) {
    return (
        <>
            <div className="form--group">
                <label htmlFor="flight-number">Número de vuelo</label>
                <input type="text" id="flight-number" placeholder="AA-1234"
                    {...register("flt_flight_number", { required: "Numero de Vuelo Requerido" })}
                />
                {errors.flt_flight_number && <ErrorMessage> {errors.flt_flight_number.message} </ErrorMessage>}
            </div>

            <div className="form--group">
                <label htmlFor="origin">Origen</label> 
                <select id="flight-origin" {...register("flt_origin", { required: "Origen Requerido" })}>
                    <option value="">Seleccionar ciudad</option>
                    <option value="bogota">Bogotá</option>
                    <option value="medellin">Medellín</option>
                    <option value="cali">Cali</option>
                </select>
                {errors.flt_origin && <ErrorMessage> {errors.flt_origin.message} </ErrorMessage>}
            </div>

            <div className="form--group">
                <label htmlFor="destination">Destino</label>
                <select id="flight-destination" {...register("flt_destination", { required: "Origen Destino" })}>
                    <option value="">Seleccionar ciudad</option>
                    <option value="cartagena">Cartagena</option>
                    <option value="pereira">Pereira</option>
                    <option value="barranquilla">Barranquilla</option>
                </select>
                {errors.flt_destination && <ErrorMessage> {errors.flt_destination.message} </ErrorMessage>}
            </div>

            <div className="form--group--double">
                <div>
                    <label htmlFor="departure">Hora de salida</label>
                    <input type="datetime-flt_departure_time" id="flt_departure_time" {...register("flt_departure_time", { required: "Hora de salida requerida" })} />
                    {errors.flt_departure_time && <ErrorMessage> {errors.flt_departure_time.message} </ErrorMessage>}
                </div>
                <div>
                    <label htmlFor="arrival">Hora de llegada</label>
                    <input type="datetime-local" id="flt_arrival_time" {...register("flt_arrival_time", { required: "Hora de llegada requerida" })} />
                    {errors.flt_arrival_time && <ErrorMessage> {errors.flt_arrival_time.message} </ErrorMessage>}
                </div>
            </div>

            <div className="form--group--double">
                <div>
                    <label htmlFor="seats">Asientos totales</label>
                    <input type="number" id="flt_total_seats" min={0} {...register("flt_total_seats", { required: "Numero de asientos requerido" })} />
                    {errors.flt_total_seats && <ErrorMessage> {errors.flt_total_seats.message} </ErrorMessage>}
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input type="number" id="price" min={0} {...register("flt_price", { required: "Precio requerido" })} />
                    {errors.flt_price && <ErrorMessage> {errors.flt_price.message} </ErrorMessage>}
                </div>
            </div>
        </>
    );
}

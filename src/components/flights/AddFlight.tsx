import type { FlightForm } from "../../types";
import { useForm } from "react-hook-form";
import FlightFormData from "./FlightForm";

export default function AddFlight() {
    const defaultValues = {} as FlightForm;

    const { register, handleSubmit, formState: { errors } } = useForm<FlightForm>({ defaultValues });


    return (
        <>
            <form className="form--register">
                <FlightFormData register={register} />
                <button className="btn--register">Registrar vuelo</button>
            </form>
        </>
    );
}
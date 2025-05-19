import type { FlightForm } from "../../../types";
import { useForm } from "react-hook-form";
import FlightFormData from "../../../components/flights/FlightForm";


export default function AddFlight() {
    const defaultValues = {} as FlightForm;

    const { register, handleSubmit, formState: { errors } } = useForm<FlightForm>({ defaultValues });

    const handleCreateFlight = (data: FlightForm) => {
        console.log("Flight data", data);
    }

    return (
        <>
            <form className="form--register" onSubmit={handleSubmit(handleCreateFlight)}>
                <FlightFormData register={register} errors={errors} />
                <button className="btn--register" type="submit" >Registrar vuelo</button>
            </form>
        </>
    );
}
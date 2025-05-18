import { useGetAllFlights } from "../../hooks/useFlight.use";


/**
 * @description Pagina de clientes
 */
export default function CustomerPage() {
    const { data: flights, isLoading: isLoadingFlights, isError: isErrorFlights } = useGetAllFlights();

    if (isLoadingFlights) return <p>Cargando...</p>;
    if (isErrorFlights) return <p>Error</p>;
    if (flights) return (
        <main className="">
            <h2>Vuelos disponibles</h2>

            {flights.length ? (
                <>{flights.map((flight) => (
                    <div key={flight.flt_id}>
                        <h3>{flight.flt_flight_number}</h3>
                        <p>{flight.flt_origin}</p>
                    </div>
                ))}

                </>
            ) :
                (<p>No hay vuelos disponibles</p>)
            }


        </main >
    );
}

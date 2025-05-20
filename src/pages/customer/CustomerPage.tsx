
import { useGetAllFlights } from "../../hooks/useFlight.use";
import Carrusel from "../../components/Carrusel";
import Cards from "./Cards";


const carruselItems = [
  { id: 1, title: "Playa Cancún", imagen: "/img/cancun.jpg" },
  { id: 2, title: "Ciudad de México", imagen: "/img/cdmx.jpg" },
  { id: 3, title: "Oaxaca", imagen: "/img/oaxaca.jpg" },
  { id: 4, title: "Playa Acapulco", imagen: "/img/cancun.jpg" },
  { id: 5, title: "Ciudad Manta", imagen: "/img/cdmx.jpg" },
  { id: 6, title: "Quito", imagen: "/img/oaxaca.jpg" },
];

const fakeFlights = [
    {
        flt_id: 1,
        flt_flight_number: "AM123",
        flt_origin: "Ciudad de México",
        flt_destination: "Cancún",
        flt_departure_time: "2025-05-20 14:00",
        flt_prices: 300,
    },
    {
        flt_id: 2,
        flt_flight_number: "AV456",
        flt_origin: "Quito",
        flt_destination: "Guayaquil",
        flt_departure_time: "2025-05-21 08:30",
        flt_prices: 1000,
    },
    {
        flt_id: 3,
        flt_flight_number: "LA789",
        flt_origin: "Lima",
        flt_destination: "Santiago",
        flt_departure_time: "2025-05-22 10:15",
        flt_prices: 500
    },
    {
        flt_id: 4,
        flt_flight_number: "AA101",
        flt_origin: "Miami",
        flt_destination: "Nueva York",
        flt_departure_time: "2025-05-23 12:45",
        flt_prices: 3000,
    },
    {
        flt_id: 5,
        flt_flight_number: "BA202",
        flt_origin: "Londres",
        flt_destination: "París",
        flt_departure_time: "2025-05-24 16:00",
        flt_prices: 2349,
    },
    {
        flt_id: 6,
        flt_flight_number: "AF303",
        flt_origin: "París",
        flt_destination: "Berlín",
        flt_departure_time: "2025-05-25 18:30",
        flt_prices: 2003
    },
    {
        flt_id: 7,
        flt_flight_number: "LH404",
        flt_origin: "Fráncfort",
        flt_destination: "Ámsterdam",
        flt_departure_time: "2025-05-26 20:00",
        flt_prices: 1549,
    },
    {
        flt_id: 8,
        flt_flight_number: "KL505",
        flt_origin: "Ámsterdam",
        flt_destination: "Bruselas",
        flt_departure_time: "2025-05-27 22:15",
        flt_prices: 1233,
    },
];

export default function CustomerPage() {
   const { data: flights, isLoading: isLoadingFlights, isError: isErrorFlights } = useGetAllFlights();

  
    if (isLoadingFlights) return <p>Cargando...</p>;
    if (isErrorFlights) return <p>Error</p>;

  return (
    <main>
     

      <Carrusel items={carruselItems} />

      <section className="card-container">
        <h2>Vuelos disponibles</h2>
        <div className="card-list">
          {fakeFlights.map(flight => (
            <Cards
              key={flight.flt_id}
              flightNumber={flight.flt_flight_number}
              origin={flight.flt_origin}
              destination={flight.flt_destination}
              departureTime={flight.flt_departure_time}
              prices={flight.flt_prices}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

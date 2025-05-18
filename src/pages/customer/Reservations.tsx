import React, { useState } from 'react';

type ReservationStatus = 'pendiente' | 'confirmada' | 'cancelada';

interface Reservation {
  id: number;
  user: string;
  flightNumber: string;
  time: string;
  status: ReservationStatus;
  seatsAvailable: number;
}

const initialReservations: Reservation[] = [
  {
    id: 1,
    user: 'Juan Pérez',
    flightNumber: 'IB1234',
    time: '2025-06-01 10:30',
    status: 'confirmada',
    seatsAvailable: 5,
  },
  {
    id: 2,
    user: 'Ana Gómez',
    flightNumber: 'AA5678',
    time: '2025-06-02 15:00',
    status: 'pendiente',
    seatsAvailable: 3,
  },
  {
    id: 3,
    user: 'Luis Martínez',
    flightNumber: 'LH9101',
    time: '2025-06-03 18:45',
    status: 'cancelada',
    seatsAvailable: 2,
  },
];

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);

  const handleCancel = (id: number) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: 'cancelada' } : res
      )
    );
  };

  const handleConfirm = (id: number) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: 'confirmada' } : res
      )
    );
  };

  return (
    <div className="reservations-container">
      <h2 className="reservations-title">Mis Reservaciones</h2>

      {reservations.map(({ id, user, flightNumber, time, status, seatsAvailable }) => (
        <div key={id} className="reservation-card" aria-live="polite">
          <div className="reservation-details">
            <div className="reservation-row">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 19.5l19-7-19-7v4l13 3-13 3v4z" />
              </svg>
              <span><strong>Vuelo:</strong> {flightNumber}</span>
            </div>
            <div className="reservation-row">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 8v5l4 2" stroke="#6f57ff" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="9" stroke="#6f57ff" strokeWidth="2" fill="none" />
              </svg>
              <span><strong>Hora:</strong> {time}</span>
            </div>
            <div className="reservation-row seats-info">
              <span>Asientos disponibles: {seatsAvailable}</span>
            </div>
            <div className={`badge ${status}`}>
              {status === 'confirmada' ? 'Confirmada' : status === 'pendiente' ? 'Pendiente' : 'Cancelada'}
            </div>
          </div>

          <div>
            {status === 'pendiente' && (
              <button
                className="btn-confirm"
                onClick={() => handleConfirm(id)}
                type="button"
                aria-label={`Confirmar reserva de vuelo ${flightNumber}`}
              >
                Confirmar
              </button>
            )}
            {status === 'confirmada' && (
              <button
                className="btn-cancel"
                onClick={() => handleCancel(id)}
                type="button"
                aria-label={`Anular reserva de vuelo ${flightNumber}`}
              >
                Anular
              </button>
            )}
            {status === 'cancelada' && (
              <button className="btn-cancel" disabled type="button">
                Anulada
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

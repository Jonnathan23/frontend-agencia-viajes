// Card.tsx
import React from 'react';

interface CardProps {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  prices: number;
}

export default function Card({ flightNumber, origin, destination, departureTime,prices}: CardProps) {
  return (
    <div className="flight-card">
      <h3>{flightNumber}</h3>
      <p><strong>Origen:</strong> {origin}</p>
      <p><strong>Destino:</strong> {destination}</p>
      <p><strong>Salida:</strong> {departureTime}</p>
     <p><strong>Costo:</strong> {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'USD' }).format(prices)}</p>
    </div>
  );
}


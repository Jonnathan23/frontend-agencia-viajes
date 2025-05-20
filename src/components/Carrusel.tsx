import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarruselItem {
  id: number | string;
  title: string;
  description?: string;
  image?: string;
}

interface CarruselProps {
  items: CarruselItem[];
  title?: string;
}


export default function Carrusel({ items, title = "TU PROXIMO DESTINO" }: CarruselProps) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const visibleItems = items.slice(scrollIndex, scrollIndex + 3);

  const handleNext = () => {
    if (scrollIndex + 3 < items.length) {
      setScrollIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="carousel-container"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h2 className="carousel-title">{title}</h2>

      <div
        className="carousel-track"
        style={{
          display: "flex",
          gap: "2rem",
          overflow: "hidden",
          minHeight: "400px", 
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {visibleItems.map((item) => (
            <motion.div
              className="carousel-item"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              style={{
                flex: "0 0 30%",
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                    objectFit: "cover",
                    height: "200px",
                  }}
                />
              )}
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div
        className="carousel-controls"
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <button className="carousel-button" onClick={handlePrev}>&#8249;</button>
        <button className="carousel-button" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
}

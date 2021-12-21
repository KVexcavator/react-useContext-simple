import React from "react";
import ColorStarRating from "./ColorStarRating";
import { useColors } from "./color-hooks";
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <ColorStarRating 
        selectedStars={rating} 
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}
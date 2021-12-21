import React from "react";
import { FaStar } from "react-icons/fa";

function ColorStarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
  const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
  );  
  const createArray = length => [...Array(length)];
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default ColorStarRating
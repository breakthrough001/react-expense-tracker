import React from "react";
import { useState } from "react";

const Tours = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      planet: "Mars",
      excursion: "Canyon Adventures",
      price: "$499",
    },
    {
      id: 2,
      planet: "Neptune",
      excursion: "Ocean Aerial Tours",
      price: "$599",
    },
    {
      id: 3,
      planet: "Venus",
      excursion: "Dune Buggy Tours",
      price: "$899",
    },
  ]);

  return (
    <>
      {tours.map((tour) => {
        return (
          <div>
            <h1>{tour.planet}</h1>
            <h6>{tour.excursion}</h6>
            <p>{tour.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Tours;

import React from "react";
import { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Tours = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      planet: "Mars",
      excursion: "Canyon Adventures",
      price: "$499",
      image: "/assets/images/planet-1.png",
    },
    {
      id: 2,
      planet: "Neptune",
      excursion: "Ocean Aerial Tours",
      price: "$599",
      image: "/assets/images/planet-2.png",
    },
    {
      id: 3,
      planet: "Venus",
      excursion: "Dune Buggy Tours",
      price: "$899",
      image: "/assets/images/planet-3.png",
    },
  ]);

  return (
    <>
      {tours.map((tour) => {
        return (
          <div className='container'>
            <div className='row'>
              <Card className='col-3'>
                <CardBody>
                  <CardImg src={tour.image} />
                  <CardTitle>{tour.planet}</CardTitle>
                  <CardText>{tour.excursion}</CardText>
                  <CardText>{tour.price}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tours;

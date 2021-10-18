import React from "react";

const HeroBanner = (props) => {
  return (
    <div>
      <h1>
        {props.title} {props.name}
      </h1>
    </div>
  );
};

export default HeroBanner;

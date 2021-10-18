import React from "react";
import { Button } from "reactstrap";

const HeroBanner = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <h1>SPACE ADVENTURES FOR EVERYONE</h1>
        <Button color='primary'>Sign up App</Button>
        <Button color='warning'>Sign up Google</Button>
      </div>
    </div>
  );
};

export default HeroBanner;

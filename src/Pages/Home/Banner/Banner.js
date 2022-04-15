import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner banner-container">
      <div className="banner-search">
        <h1 className="text-center mb-4">Best food waiting for your belly</h1>
        <InputGroup className="mb-3 w-75 mx-auto ">
          <FormControl
            placeholder="Search food items"
            aria-label="Search food items"
            aria-describedby="basic-addon2"
            className="input-form"
          />
          <Button
            className="btn btn-danger signup-btn  input-form"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;

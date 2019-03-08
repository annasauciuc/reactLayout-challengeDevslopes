import React, { Component } from "react";

import "./City.css";
const City = ({ city }) => {
  return (
    <React.Fragment>
      <div
        className="card city-card text-center text-white"
        style={{ backgroundColor: "#FF8A00", height: "130px" }}
      >
        <div className="card-body">
          <h5 className="card-title">{city}</h5>
          <small className="card-text">Paris</small>
        </div>
      </div>
    </React.Fragment>
  );
};
export default City;

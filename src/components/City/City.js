import React, { Component } from "react";

import "./City.css";
const City = ({ city }) => {
  return (
    <React.Fragment>
      <div
        className="card  mt-2 city-card text-center text-white"
        style={{ backgroundColor: "#FF8A00", height: "130px" }}
      >
        <div className="card-body">
          <h2 className="card-title">{city}</h2>
          <small className="card-text">Paris</small>
        </div>
      </div>
    </React.Fragment>
  );
};
export default City;

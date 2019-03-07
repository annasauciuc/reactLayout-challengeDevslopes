import React, { Component } from "react";


const City = ({ city }) => {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{city}</h5>
          <p className="card-text">{city}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default City;

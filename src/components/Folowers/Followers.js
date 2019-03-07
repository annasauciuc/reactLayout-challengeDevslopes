import React, { Component } from "react";

const Followers = ({ followers }) => {
 
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{followers}</h5>
          <p className="card-text" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Followers;

import React, { Component } from "react";

const Followers = ({ followers }) => {
  return (
    <React.Fragment>
      <div  className="col-xs-12  col-sm-12 col-md-4 ">
        <div
          className="  mt-2 border p-3 bg-white rounded "
          style={{ height: "100%" }}
        >
          <h5 className="card-title">
            <strong>{followers}</strong>
          </h5>
          <p className="card-text">New followers added this month </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Followers;

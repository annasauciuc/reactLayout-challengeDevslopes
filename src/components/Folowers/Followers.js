import React, { Component } from "react";

const Followers = ({ followers }) => {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-4 ">
        <div
          className="  card-body  mt-2 border bg-white rounded "
          style={{ height: "140px" }}
        >
          <h5 className="card-title">
            <strong> 20</strong>
          </h5>
          <p className="card-text">New followers added this month </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Followers;

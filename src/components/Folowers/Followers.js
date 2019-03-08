import React, { Component } from "react";

const Followers = ({ followers }) => {
  return (
    <React.Fragment>
      <div className="border bg-white rounded col-xs-12 col-sm-6 col-md-4 "
      style={{height:'140px'}}>
        <div className="  card-body">
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

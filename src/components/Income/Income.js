import React, { Component } from "react";
import Followers from "../Folowers/Followers";
class Income extends Component {
  render() {
    const { income, followers } = this.props;
    console.log("this.props", this.props);
    console.log("followers :", followers);
    console.log("income", income);

    return (
      <React.Fragment>
        {" "}
        <div className="row">
          {/* <div className="col-md-4"> */}
          <Followers followers={followers} />
          {income.map((inc, i) => {
            return (
              <div key={"income" + i} className=" col-xs-12 col-sm-12 col-md-4">
                <div className="card-body  mt-2  bg-white rounded border">
                  <h5 className="card-title">
                    <strong> $ {inc}</strong>{" "}
                  </h5>
                  <p className="card-text">Average Monthly Income</p>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Income;

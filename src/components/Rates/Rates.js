import React, { Component } from "react";
import "./Rate.css";
class Rates extends Component {
  render() {
    const { rates, backgroundColor } = this.props;
    console.log('backgroundColor', backgroundColor)

    return (
      <React.Fragment>
        {rates.title.map((rate, i) => {
          return (
            <div className=" mt-3 rounded border  ">
              <div
                className=" pt-3 pb-3  col-md-12 text-white"
                style={{ backgroundColor: rates.backgroundColor[i] }}
              >
                <small className="card-text">{rate}</small>
                <h5 className="">{rates.procent[i]} </h5>
              </div>
              <div className="col-md-12 bg-white  rate-footer" />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Rates;

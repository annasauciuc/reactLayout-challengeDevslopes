import React, { Component } from "react";
import "./Rate.css";
class Rates extends Component {
  render() {
    const { rates } = this.props;

    return (
      <React.Fragment>
        {rates.title.map((rate, i) => {
          return (
            <div key={"rates" + i} className=" mt-3 p   ">
              <div
                className=" pt-3 pb-3 rounded-top border  col-md-12 text-white"
                style={{ backgroundColor: rates.backgroundColor[i] }}
              >
                <small className="card-text">{rate}</small>
                <h5 className="">{rates.procent[i]} </h5>
              </div>
              <div className="col-md-12 bg-white border-left border-right border-bottom rounded-bottom rate-footer" />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Rates;

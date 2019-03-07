import React, { Component } from "react";

class Income extends Component {
  render() {
    const income = {
      number: 20,
      text: "New Income added to this month"
    };

    const { number } = this.income;

    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{number}</h5>
            <p className="card-text">{number}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Income;

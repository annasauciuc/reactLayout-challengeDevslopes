import React, { Component } from "react";

class Rates extends Component {
  render() {
 
console.log('this.rates :', this.rates);
    const { number, text } = this.rates;

    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{number}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Rates;
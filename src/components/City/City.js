import React, { Component } from "react";



class City extends Component {
  render() {
    const income = {
      number: 20,
      text: "New City added to this month"
    };

    const { number, text } = income;

    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{number}</h5>
            <p className="card-text">
             {text}
            </p>
        
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default City;
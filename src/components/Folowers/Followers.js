import React, { Component } from "react";



class Followers extends Component {
  render() {
    const income = {
      number: 20,
      text: "New followers added to this month"
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
export default Followers;
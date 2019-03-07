import React, { Component } from "react";



class Followers extends Component {
  render() {
 

    const { followers} = this.followers;

    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{followers}</h5>
            <p className="card-text">
           
            </p>
        
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Followers;

import React, { Component } from "react";

class Photo extends Component {
  render() {
    const income = {
      number: 20,
      text: "New Income added to this month"
    };

    
 const{views,likes,comments}=this.props
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{views}</h5>
            <p className="card-text">{likes}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Photo;

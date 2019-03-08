import React, { Component } from "react";

import Income from "./../Income/Income";
import Photos from "./../Photo/Photo";
import City from "./../City/City";
import Rates from "./../Rates/Rates";
import "./Layout.css";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      followers: 20,
      income: [1250, 13865],
      views: [15080, 15800],
      likes: [12000, 12000],
      comments: [5100, 5100],
      city: "18º",
      rates: {
        title: ["New Visitors","Bounce Rate", "Searches",  "Traffic",],
        procent: ["1.5K", "50%", "28%", "140.5 kb"]
      }
    };
  }

  render() {
    console.log("this.state", this.state);
    const {
      followers,
      rates,
      income,
      views,
      comments,
      city,
      likes
    } = this.state;

    return (
      <React.Fragment>
        <div className="container mt-5 mb-5">
          <div className="row ">
            <div className="col-md-9    mt-3">
              <Income income={income} />
              <Photos views={views} likes={likes} comments={comments} />
            </div>
            <div className="col-md-3 mt-3 d-flex-row">
              <City city={city} />
              <Rates rates={rates} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;

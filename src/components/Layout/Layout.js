import React, { Component } from "react";

import Followers from "../Folowers/Followers";
import Income from "./../Income/Income";
import Photos from "./../Photo/Photo";
import City from "./../City/City";
import Rates from "./../Rates/Rates";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      followers: 20,
      income: [1250, 13865],
      views: [15080, 15800],
      likes: [12000, 12000],
      comments: [5100, 5100],
      city: "18ª",
      rates: {
        title: ["Traffic", "Searches", "Bounce Rate", "New Visitors"],
        rates: ["1.5K", "50%", "28%", "140.5 kb"]
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
        <div className="container">
          <div className="col-md-9" style={{ width: "18rem" }}>
            <Followers followers={followers}  />
            <Income income={income}  />
            <Photos views={views} likes={likes} comments={comments} />
          </div>
          <div className="col-md-3 d-flex-row" style={{ width: "18rem" }}>
            <City city={city}  />
            <Rates rates={rates} rates={rates} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;

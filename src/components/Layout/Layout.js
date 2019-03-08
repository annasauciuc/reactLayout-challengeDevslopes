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
      photos: {
        views: [15080, 15800],
        likes: [12000, 12000],
        comments: [5100, 5100],
        photoColor: ["#0096D0", "#CD59AE"]
      },

      rates: {
        title: ["New Visitors", "Bounce Rate", "Searches", "Traffic"],
        procent: ["1.5K", "50%", "28%", "140.5 kb"],
        backgroundColor: ["#0096D0", "#B28AD6", "#FF4826", "#63C254"]
      }
    };
  }

  render() {
    console.log("this.state", this.state);
    const { photos, rates, income, followers } = this.state;

    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-9  col-xs-12 col-sm-12 mt-3">
              <Income income={income} followers={followers} />
              <Photos photos={photos} />
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12 mb-5 mt-3 ">
              <City />
              <Rates rates={rates} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;

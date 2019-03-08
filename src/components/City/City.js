import React, { Component } from "react";

import "./City.css";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { city: [], temp: "" };
  }

  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/773692/";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          city: data,
          temp: data.consolidated_weather[0].max_temp
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { city, temp } = this.state;
    return (
      <React.Fragment>
        <div
          className="card  mt-2 city-card text-center text-white"
          style={{ backgroundColor: "#FF8A00", height: "130px" }}
        >
          <div className="card-body">
            <h2 className="card-title">{`${Math.floor(temp)}º`}</h2>
            <small className="card-text">{city.title}</small>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default City;

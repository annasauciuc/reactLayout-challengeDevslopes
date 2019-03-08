import React, { Component } from "react";
import "./Photo.css";
class Photo extends Component {
  render() {
    console.log("this.props :", this.props);
    const { views, likes, comments } = this.props;
  ;


    return (
      <React.Fragment>
        {views.map((view, i) => {
          return (
            <div className=" mt-3   photo-container">
              <div className=" rounded photo ">
                <div className="card-body main-card">
                  <h5 className="card-title" />
                  <p className="card-text" />
                </div>

                <div className="card-footer d-flex   card-f " >
                  <div className="col-md-4 text-center">
                    <h4>{view}</h4>
                    <span>Shot views</span>
                  </div>
                  <div className="col-md-4 text-center">
                    <h4>{likes[i]}</h4>
                    <span>Likes</span>
                  </div>
                  <div className="col-md-4 text-center">
                    <h4>{comments[i]}</h4>
                    <span>Comments</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Photo;

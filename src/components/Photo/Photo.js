import React, { Component } from "react";
import "./Photo.css";
class Photo extends Component {
  render() {
    console.log("this.props :", this.props);
    const { photos, photoColor } = this.props;

    return (
      <React.Fragment>
        {photos.views.map((view, i) => {
          return (
            <div className=" mt-3    photo-container">
              <div
                className="row rounded photo "
                style={{ backgroundColor: photos.photoColor[i] }}
              >
                <div className="col-md-12 main-card">
                  <h5 className="card-title" />
                  <p className="card-text" />
                </div>

                <div className="col-md-12 d-inline-flex   card-f ">
                  <div className=" text-center">
                    <h4>{photos.views[i]}</h4>
                    <span>Shot views</span>
                  </div>
                  <div className=" text-center">
                    <h4>{photos.likes[i]}</h4>
                    <span>Likes</span>
                  </div>
                  <div className=" text-center">
                    <h4>{photos.comments[i]}</h4>
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

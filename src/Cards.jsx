import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} width="348.72" height="195.28" className="card-img-top" alt="images" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink excat to="/about" className="btn btn-primary">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

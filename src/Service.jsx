import React from "react";
import Cards from "./Cards";
// import {NavLink} from "react-router-dom";
// import web1 from "../src/img/images.png";
import SData from "./SData";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center font-weight-bold">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
              {SData.map((val, ind) => {
                return (
                  <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;

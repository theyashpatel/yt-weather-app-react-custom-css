import React from "react";
import "./descriptions.css";

import { FaArrowDown } from "react-icons/fa";

const Descriptions = () => {
  return (
    <div className="section section__descriptions">
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
    </div>
  );
};

export default Descriptions;

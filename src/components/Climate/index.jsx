import React, { useState } from "react";
import "./style.css";
import icon from "./temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [tempState, setTemp] = useState(temperature);
  const handleTemp = (change) => {
    setTemp(tempState + change);
  };

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={icon} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature"> {tempState} &deg;C</div>
        <div className="climate__humidity">
         Humidity {humidity} %
        </div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => {
            handleTemp(1);
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            handleTemp(-1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;

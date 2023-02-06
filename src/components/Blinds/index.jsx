import React, { useState } from "react";
import "./style.css";
import blindsOn from "./blinds-open.svg";
import blindsOff from "./blinds-closed.svg";

const Blinds = ({ state }) => {
  const [blindsState, setBlinds] = useState(state);

  const handleOpen = () => {
    setBlinds("open");
  };

  const handleClose = () => {
    setBlinds("closed");
  };

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsState === "open" ? blindsOn : blindsOff} />
      </div>
      <div className="blinds__name">Blinds</div>
      <div className="blinds__controls">
        <button
          onClick={handleOpen}
          className={
            blindsState === "open" ? "button button--active" : "button"
          }
        >
          Open
        </button>
        <button
          onClick={handleClose}
          className={
            blindsState === "closed" ? "button button--active" : "button"
          }
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Blinds;

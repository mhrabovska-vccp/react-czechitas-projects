import React from "react";
import Light from "../Light";
import "./style.css";

const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((light) => (
        <Light name={light.name} state={light.state} key={light.name} />
      ))}
    </div>
  );
};

export default Lights;
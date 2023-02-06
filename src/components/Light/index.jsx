import React, { useState } from "react";
import "./style.css";
import onURL from "./light-on.svg";
import offURL from "./light-off.svg";

const Light = ({ name, state }) => {
  const [lightState, setLight] = useState(state);

  const handleLight = () => {
    if (lightState === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };

  return (
    <div className="light" onClick={handleLight}>
      <div className="light__icon">
        <img src={lightState === "on" ? onURL : offURL} />
      </div>

      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;

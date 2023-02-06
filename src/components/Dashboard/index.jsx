import React from "react";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";
import Lights from "../Lights";
import "./style.css";

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
       <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
      <Blinds state={data.blinds} />
      <Energy
        water={data.energyConsumption.water}
        electricity={data.energyConsumption.electricity}
      />
       <Lights lights={data.lights} />
    
    </main>
  );
};

export default Dashboard;
